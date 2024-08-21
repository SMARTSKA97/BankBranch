import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch/branch.service';

@Component({
  selector: 'app-branch-show',
  templateUrl: './branch-show.component.html',
})
export class BranchShowComponent implements OnInit {
  branches: any[] = [];

  constructor(private branchService: BranchService) {}

  ngOnInit() {
    this.branchService.getBranches().subscribe((data) => {
      this.branches = data;
    });
  }
}
