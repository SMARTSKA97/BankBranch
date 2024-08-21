import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank/bank.service';

@Component({
  selector: 'app-bank-show',
  templateUrl: './bank-show.component.html',
  styleUrls: ['./bank-show.component.css']
})
export class BankShowComponent implements OnInit {
  banks: any[] = [];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.bankService.getBanks().subscribe((data) => {
      this.banks = data;
    });
  }
}
