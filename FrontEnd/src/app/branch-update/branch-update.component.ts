import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BranchService } from '../branch/branch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-update',
  templateUrl: './branch-update.component.html',
})
export class BranchUpdateComponent implements OnInit {
  branchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private branchService: BranchService,
    private route: ActivatedRoute
  ) {
    this.branchForm = this.fb.group({
      ID: [{ value: '', disabled: true }, Validators.required],
      Branch_Name: ['', Validators.required],
      Address: ['', Validators.required],
      State: ['', Validators.required],
      Pincode: ['', Validators.required],
      MICR_Code: ['', Validators.required],
      IFSC_Code: ['', Validators.required],
      Bank_ID: ['', Validators.required],
    });
  }

  ngOnInit() {
    const branchID = Number(this.route.snapshot.paramMap.get('id'));
    this.branchService.getBranches().subscribe((branches) => {
      const branch = branches.find((b) => b.ID === branchID);
      if (branch) {
        this.branchForm.setValue({
          ID: branch.ID,
          Branch_Name: branch.Branch_Name,
          Address: branch.Address,
          State: branch.State,
          Pincode: branch.Pincode,
          MICR_Code: branch.MICR_Code,
          IFSC_Code: branch.IFSC_Code,
          Bank_ID: branch.Bank_ID,
        });
      }
    });
  }

  onSubmit() {
    if (this.branchForm.valid) {
      const branchData = this.branchForm.value;
      branchData.ID = Number(branchData.ID); // Ensure ID is numeric
      branchData.Bank_ID = Number(branchData.Bank_ID); // Ensure Bank_ID is numeric

      this.branchService.updateBranch(branchData.ID, branchData).subscribe((response) => {
        console.log('Branch updated:', response);
      });
    }
  }
}
