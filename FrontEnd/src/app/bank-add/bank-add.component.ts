import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../bank/bank.service';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css']
})
export class BankAddComponent implements OnInit {
  bankForm: FormGroup;

  constructor(private fb: FormBuilder, private bankService: BankService) {
    this.bankForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],  // Ensure the ID is numeric
      Bank_Name: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.bankForm.valid) {
      const bankData = this.bankForm.value;
      this.bankService.addBank(bankData).subscribe(response => {
        console.log('Bank added successfully', response);
      });
    }
  }
}
