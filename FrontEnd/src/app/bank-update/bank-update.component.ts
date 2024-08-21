import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedBankId: number | null = null;

  constructor(private fb: FormBuilder, private bankService: BankService, private route: ActivatedRoute, private router: Router) {
    this.bankForm = this.fb.group({
      Bank_Name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.bankService.getBanks().subscribe((data) => {
      this.banks = data;
    });

    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.bankService.getBankById(id).subscribe((bank) => {
          this.bankForm.patchValue(bank);
          this.selectedBankId = id;
        });
      }
    });
  }

  onBankSelect(event: any): void {
    const selectedBankId = event.value;
    if (selectedBankId) {
      this.bankService.getBankById(selectedBankId).subscribe((bank) => {
        this.bankForm.patchValue(bank);
      });
    }
  }

  updateBank(): void {
    if (this.bankForm.valid && this.selectedBankId !== null) {
      this.bankService.updateBank(this.selectedBankId, this.bankForm.value).subscribe(() => {
        this.router.navigate(['/Bank']);
      });
    }
  }
}
