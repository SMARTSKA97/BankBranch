import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '../branch/branch.service';

@Component({
  selector: 'app-branch-update',
  templateUrl: './branch-update.component.html',
  styleUrls: ['./branch-update.component.css']
})
export class BranchUpdateComponent implements OnInit {
  branchForm: FormGroup;
  branches: any[] = [];
  selectedBranchId: number | null = null;

  constructor(private fb: FormBuilder, private branchService: BranchService, private route: ActivatedRoute, private router: Router) {
    this.branchForm = this.fb.group({
      Branch_Name: ['', Validators.required],
      Address: ['', Validators.required],
      State: ['', Validators.required],
      Pin_Code:['',Validators.required],
      MICR_Code: ['', Validators.required],
      IFSC_Code: ['', Validators.required],
      Bank_ID: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.branchService.getBranches().subscribe((data) => {
      this.branches = data;
    });

    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.branchService.getBranchById(id).subscribe((branch) => {
          this.branchForm.patchValue(branch);
          this.selectedBranchId = id;
        });
      }
    });
  }

  onBranchSelect(event: any): void {
    const selectedBranchId = event.value;
    if (selectedBranchId) {
      this.branchService.getBranchById(selectedBranchId).subscribe((branch) => {
        this.branchForm.patchValue(branch);
      });
    }
  }

  updateBranch(): void {
    if (this.branchForm.valid && this.selectedBranchId !== null) {
      this.branchService.updateBranch(this.selectedBranchId, this.branchForm.value).subscribe(() => {
        this.router.navigate(['/Branch']);
      });
    }
  }
}
