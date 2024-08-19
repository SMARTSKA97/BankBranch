import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from './bank.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  providers: [MessageService]
})
export class BankComponent implements OnInit {
  banks: any[] = [];
  bankForm: FormGroup;
  isUpdating: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bankService: BankService,
    private messageService: MessageService
  ) {
    this.bankForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadBanks();
  }

  loadBanks(): void {
    this.bankService.getBanks().subscribe(
      data => {
        this.banks = data;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load banks' });
      }
    );
  }

  onSubmit(): void {
    const bankData = this.bankForm.value;

    if (this.isUpdating) {
      this.bankService.updateBank(bankData).subscribe(
        () => {
          this.loadBanks();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bank updated successfully' });
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to update bank' });
        }
      );
    } else {
      this.bankService.addBank(bankData).subscribe(
        () => {
          this.loadBanks();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bank added successfully' });
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add bank' });
        }
      );
    }

    this.bankForm.reset();
    this.isUpdating = false;
  }

  deleteBank(id: number): void {
    this.bankService.deleteBank(id).subscribe(
      () => {
        this.loadBanks();
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Bank deleted successfully' });
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to delete bank' });
      }
    );
  }

  selectBankForUpdate(bank: any): void {
    this.bankForm.patchValue({
      id: bank.ID,
      name: bank.Bank_Name
    });
    this.isUpdating = true;
  }
}
