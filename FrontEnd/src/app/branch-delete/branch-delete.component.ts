import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch/branch.service';

@Component({
  selector: 'app-branch-delete',
  templateUrl: './branch-delete.component.html',
})
export class BranchDeleteComponent implements OnInit {
  branches: any[] = [];
  selectedBranchID!: number;

  constructor(private branchService: BranchService) {}

  ngOnInit() {
    this.branchService.getBranches().subscribe((data) => {
      this.branches = data;
    });
  }

  onDelete() {
    if (this.selectedBranchID) {
      this.branchService.deleteBranch(this.selectedBranchID).subscribe(() => {
        console.log('Branch deleted');
      });
    }
  }
}
