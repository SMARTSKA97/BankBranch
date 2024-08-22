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

  constructor(
    private fb: FormBuilder,
    private branchService: BranchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.branchForm = this.fb.group({
      id: [null],  // Include the id field
      branchName: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required],
      micrCode: ['', Validators.required],
      ifscCode: ['', Validators.required],
      bankId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.branchService.getBranchById(id).subscribe((branch) => {
          this.branchForm.patchValue({
            id: branch.id,  // Patch the id along with other fields
            branchName: branch.branchName,
            address: branch.address,
            state: branch.state,
            pinCode: branch.pinCode,
            micrCode: branch.micrCode,
            ifscCode: branch.ifscCode,
            bankId: branch.bankId
          });
          this.selectedBranchId = id;
        });
      }
    });
  }

  onBranchSelect(event: any): void {
    const selectedBranchId = event.value.id;
    if (selectedBranchId) {
      this.branchService.getBranchById(selectedBranchId).subscribe((branch) => {
        this.branchForm.patchValue({
          id: branch.id,  // Patch the id when selecting a branch
          branchName: branch.branchName,
          address: branch.address,
          state: branch.state,
          pinCode: branch.pinCode,
          micrCode: branch.micrCode,
          ifscCode: branch.ifscCode,
          bankId: branch.bankId
        });
      });
    }
  }

  updateBranch(): void {
    if (this.branchForm.valid && this.selectedBranchId != null) {
      const updatedBranch = this.branchForm.value;  // Include the id in the update payload
      this.branchService.updateBranch(this.selectedBranchId, updatedBranch).subscribe({
        next: () => {
          this.router.navigate(['/Branch']);
        },
        error: (err) => {
          console.error('Update failed', err);
          // Handle the error appropriately here
        }
      });
    } else {
      console.error('Form is invalid or Selected Branch ID is null');
    }
  }
}
