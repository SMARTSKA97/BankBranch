import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank/bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-delete',
  templateUrl: './bank-delete.component.html',
  styleUrls: ['./bank-delete.component.css']
})
export class BankDeleteComponent implements OnInit {
  bankList: any[] = [];
  selectedBankId: number | null = null;

  constructor(private bankService: BankService, private router: Router) {}

  ngOnInit(): void {
    this.loadBanks();
  }

  loadBanks() {
    this.bankService.getBanks().subscribe((banks) => {
      this.bankList = banks;
    });
  }

  onDelete() {
    if (this.selectedBankId !== null) {
      this.bankService.deleteBank(this.selectedBankId).subscribe(() => {
        console.log('Bank deleted successfully');
        this.router.navigate(['/Bank']);
      });
    }
  }
}
