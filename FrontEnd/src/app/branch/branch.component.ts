import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from './branch.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css'],
  providers: [MessageService]
})
export class BranchComponent implements OnInit {
  branches: any[] = [];
  branchForm: FormGroup;
  isUpdating: boolean = false;

  constructor(
    private fb: FormBuilder,
    private branchService: BranchService,
    private messageService: MessageService
  ) {
    this.branchForm = this.fb.group({
      id: ['', Validators.required],
      branchName: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      micrCode: ['', Validators.required],
      ifscCode: ['', Validators.required],
      bankId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadBranches();
  }

  loadBranches(): void {
    this.branchService.getBranches().subscribe(
      data => {
        this.branches = data;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load branches' });
      }
    );
  }

  onSubmit(): void {
    const branchData = this.branchForm.value;

    if (this.isUpdating) {
      this.branchService.updateBranch(branchData).subscribe(
        () => {
          this.loadBranches();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Branch updated successfully' });
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update branch' });
        }
      );
    } else {
      this.branchService.addBranch(branchData).subscribe(
        () => {
          this.loadBranches();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Branch added successfully' });
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add branch' });
        }
      );
    }

    this.branchForm.reset();
    this.isUpdating = false;
  }

  deleteBranch(id: number): void {
    this.branchService.deleteBranch(id).subscribe(
      () => {
        this.loadBranches();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Branch deleted successfully' });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete branch' });
      }
    );
  }

  selectBranchForUpdate(branch: any): void {
    this.branchForm.patchValue({
      id: branch.ID,
      branchName: branch.Branch_Name,
      address: branch.Address,
      state: branch.State,
      pincode: branch.Pincode,
      micrCode: branch.MICR_Code,
      ifscCode: branch.IFSC_Code,
      bankId: branch.Bank_ID
    });
    this.isUpdating = true;
  }
}
