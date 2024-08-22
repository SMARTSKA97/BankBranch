import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../bank/bank.service';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css']
})
export class BankAddComponent {
  bankForm: FormGroup;

  constructor(private fb: FormBuilder, private bankService: BankService, private router: Router) {
    this.bankForm = this.fb.group({
      id:['', Validators.required],
      bankName: ['', Validators.required]
    });
  }

  addBank(): void {
    if (this.bankForm.valid) {
      this.bankService.addBank(this.bankForm.value).subscribe((res) => {
        this.router.navigate(['/Bank']);
      });
    }
  }
}
