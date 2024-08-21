import { Component, OnInit } from '@angular/core';
import { BranchService } from '../branch/branch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-delete',
  templateUrl: './branch-delete.component.html',
  styleUrls: ['./branch-delete.component.css']
})
export class BranchDeleteComponent implements OnInit {
  branches: any[] = [];
  selectedBranchId: number | null = null;

  constructor(private branchService: BranchService, private router: Router) { }

  ngOnInit(): void {
    this.branchService.getBranches().subscribe((data) => {
      this.branches = data;
    });
  }

  deleteBranch(): void {
    if (this.selectedBranchId !== null) {
      this.branchService.deleteBranch(this.selectedBranchId).subscribe(() => {
        this.router.navigate(['/branches']);
      });
    }
  }
}
