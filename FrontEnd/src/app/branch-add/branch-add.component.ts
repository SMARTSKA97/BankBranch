import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '../branch/branch.service';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css']
})
export class BranchAddComponent {
  branchForm: FormGroup;

  constructor(private fb: FormBuilder, private branchService: BranchService, private router: Router) {
    this.branchForm = this.fb.group({
      id:['', Validators.required],
      Branch_Name: ['', Validators.required],
      Address: ['', Validators.required],
      State: ['', Validators.required],
      Pin_Code: ['', Validators.required],
      MICR_Code: ['', Validators.required],
      IFSC_Code: ['', Validators.required],
      Bank_ID: ['', Validators.required]
    });
  }

  addBranch(): void {
    if (this.branchForm.valid) {
      this.branchService.addBranch(this.branchForm.value).subscribe((res) => {
        this.router.navigate(['/Branch']);
      });
    }
  }
}
