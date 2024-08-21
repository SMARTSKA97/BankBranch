import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../bank/bank.service';

@Component({
  selector: 'app-bank-update',
  templateUrl: './bank-update.component.html',
  styleUrls: ['./bank-update.component.css']
})
export class BankUpdateComponent implements OnInit {
  bankForm: FormGroup;
  banks: any[] = [];

  constructor(private fb: FormBuilder, private bankService: BankService) {
    this.bankForm = this.fb.group({
      ID: ['', Validators.required],
      Bank_Name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getBanks();
  }

  getBanks(): void {
    this.bankService.getBanks().subscribe(data => {
      this.banks = data;
    });
  }

  onBankSelect(event: any): void {
    const selectedBank = event.value;
    this.bankForm.patchValue({
      ID: selectedBank.ID,
      Bank_Name: selectedBank.Bank_Name
    });
  }

  onSubmit(): void {
    if (this.bankForm.valid) {
      const bankData = this.bankForm.value;
      this.bankService.updateBank(bankData.ID, { Bank_Name: bankData.Bank_Name }).subscribe(response => {
        console.log('Bank updated successfully', response);
      });
    }
  }
}
