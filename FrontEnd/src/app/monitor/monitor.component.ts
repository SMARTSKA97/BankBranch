import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank/bank.service';
import { BranchService } from '../branch/branch.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
})
export class MonitorComponent implements OnInit {
  banks: any[] = [];
  branches: any[] = [];
  selectedBankID!: number;

  constructor(private bankService: BankService, private branchService: BranchService) {}

  ngOnInit() {
    this.bankService.getBanks().subscribe((data) => {
      this.banks = data;
    });
  }

  onBankSelect() {
    if (this.selectedBankID) {
      this.branchService.getBranches().subscribe((data) => {
        this.branches = data.filter(branch => branch.Bank_ID === this.selectedBankID);
      });
    }
  }
}
