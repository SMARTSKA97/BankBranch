import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank/bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-delete',
  templateUrl: './bank-delete.component.html',
  styleUrls: ['./bank-delete.component.css']
})
export class BankDeleteComponent implements OnInit {
  banks: any[] = [];
  selectedBankId: number | null = null;

  constructor(private bankService: BankService, private router: Router) { }

  ngOnInit(): void {
    this.bankService.getBanks().subscribe((data) => {
      this.banks = data;
    });
  }

  deleteBank(): void {
    if (this.selectedBankId !== null) {
      this.bankService.deleteBank(this.selectedBankId).subscribe(() => {
        this.router.navigate(['/banks']);
      });
    }
  }
}
