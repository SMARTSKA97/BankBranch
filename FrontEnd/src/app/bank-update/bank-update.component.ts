import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../bank/bank.service';

@Component({
  selector: 'app-bank-update',
  templateUrl: './bank-update.component.html',
  styleUrls: ['./bank-update.component.css'],
})
export class BankUpdateComponent implements OnInit {
  bankForm: FormGroup;
  selectedBankId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private bankService: BankService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.bankForm = this.fb.group({
      id: [null], // Include the id field
      bankName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.bankService.getBankById(id).subscribe((bank) => {
          this.bankForm.patchValue({
            id: bank.id, // Patch the id along with other fields
            bankName: bank.bankName,
          });
          this.selectedBankId = id;
        });
      }
    });
  }

  onBankSelect(event: any): void {
    const selectedBankId = event.value.id;
    if (selectedBankId) {
      this.bankService.getBankById(selectedBankId).subscribe((bank) => {
        this.bankForm.patchValue({
          id: bank.id, // Patch the id when selecting a bank
          bankName: bank.bankName,
        });
      });
    }
  }

  updateBank(): void {
    if (this.bankForm.valid && this.selectedBankId != null) {
      const updatedBank = this.bankForm.value; // Include the id in the update payload
      this.bankService.updateBank(this.selectedBankId, updatedBank).subscribe({
        next: () => {
          this.router.navigate(['/Bank']);
        },
        error: (err) => {
          console.error('Update failed', err);
          // Handle the error appropriately here
        },
      });
    }
  }
}
