import { Component, OnInit } from '@angular/core';
import { BankService } from './bank.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html'
})
export class BankComponent {
  title = "Bank Management";
  bankobj: Bank = new Bank();
}

export class Bank
{
  id:number;
  Bank_Name:string;
  constructor()
  {
    this.id=0;
    this.Bank_Name="";
  }
}
