import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BranchService } from '../branch/branch.service';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
})
export class BranchAddComponent {
  branchForm: FormGroup;

  constructor(private fb: FormBuilder, private branchService: BranchService) {
    this.branchForm = this.fb.group({
      ID: ['', Validators.required],
      Branch_Name: ['', Validators.required],
      Address: ['', Validators.required],
      State: ['', Validators.required],
      Pincode: ['', Validators.required],
      MICR_Code: ['', Validators.required],
      IFSC_Code: ['', Validators.required],
      Bank_ID: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.branchForm.valid) {
      const branchData = this.branchForm.value;
      branchData.ID = Number(branchData.ID); // Ensure ID is numeric
      branchData.Bank_ID = Number(branchData.Bank_ID); // Ensure Bank_ID is numeric

      this.branchService.addBranch(branchData).subscribe((response) => {
        console.log('Branch added:', response);
      });
    }
  }
}
