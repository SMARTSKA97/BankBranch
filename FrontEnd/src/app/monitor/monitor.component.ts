import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonitorService } from './monitor.service'; // Adjust the import path as needed
import { BankService } from '../bank/bank.service'; // Adjust the import path as needed
import { BranchService } from '../branch/branch.service'; // Adjust the import path as needed

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
  providers: []
})
export class MonitorComponent implements OnInit {
  banks: any[] = [];
  branches: any[] = [];
  selectedBankId: number | null = null;
  selectedBankName: string ='';


  constructor(
    private monitorService: MonitorService,
    private bankService: BankService,
    private branchService: BranchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBanks();
  }

  loadBanks(): void {
    this.bankService.getBanks().subscribe((data) => {
      this.banks = data;
    });
  }

  loadBranches(): void {
    if (this.selectedBankId != null) {
      this.branchService.getBranchesByBankId(this.selectedBankId).subscribe((data) => {
        this.branches = data;
      });
    }
  }

  onBankChange(event: any): void {
    this.selectedBankId = event.value.id;
    this.selectedBankName = event.value.bankName;
    this.loadBranches();
  }

  editBranch(id: number): void {
    this.router.navigate(['/Update_Branch',id]);
  }

  addBranch(): void {
    if (this.selectedBankId !== null) {
      this.router.navigate(['/add-branch'], { queryParams: { bankId: this.selectedBankId } });
    }
  }

  deleteBranch(branchId: number): void {
    this.branchService.deleteBranch(branchId).subscribe(
      () => {
        this.loadBranches();
      },
    );
  }
}
