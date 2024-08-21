import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  branches: any[] = [];

  constructor(private branchService: BranchService, private router: Router) { }

  ngOnInit(): void {
    this.getBranches();
  }

  getBranches(): void {
    this.branchService.getBranches().subscribe((data) => {
      this.branches = data;
    });
  }

  deleteBranch(id: number): void {
    this.branchService.deleteBranch(id).subscribe(() => {
      this.getBranches(); // Refresh the list after deletion
    });
  }

  editBranch(id: number): void {
    this.router.navigate(['/Update_Branch', id]);
  }
}
