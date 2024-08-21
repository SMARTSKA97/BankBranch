import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank/bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  banks: any[] = [];

  constructor(private bankService: BankService, private router: Router) { }

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks(): void {
    this.bankService.getBanks().subscribe((data) => {
      this.banks = data;
    });
  }

  deleteBank(id: number): void {
    this.bankService.deleteBank(id).subscribe(() => {
      this.getBanks(); // Refresh the list after deletion
    });
  }

  editBank(id: number): void {
    this.router.navigate(['/Update_Bank', id]);
  }
}
