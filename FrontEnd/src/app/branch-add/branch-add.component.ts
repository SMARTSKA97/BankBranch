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
      branchName: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required],
      micrCode: ['', Validators.required],
      ifscCode: ['', Validators.required],
      bankId: ['', Validators.required]
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
