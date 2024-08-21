import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch/branch.service';

@Component({
  selector: 'app-branch-show',
  templateUrl: './branch-show.component.html',
  styleUrls: ['./branch-show.component.css']
})
export class BranchShowComponent implements OnInit {
  branches: any[] = [];

  constructor(private branchService: BranchService) { }

  ngOnInit(): void {
    this.branchService.getBranches().subscribe((data) => {
      this.branches = data;
    });
  }
}
