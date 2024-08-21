import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BankComponent } from './bank/bank.component';
import { BranchComponent } from './branch/branch.component';
import { MonitorComponent } from './monitor/monitor.component';

import { BankAddComponent } from './bank-add/bank-add.component';
import { BankUpdateComponent } from './bank-update/bank-update.component';
import { BankDeleteComponent } from './bank-delete/bank-delete.component';
import { BankShowComponent } from './bank-show/bank-show.component';

import { BranchAddComponent } from './branch-add/branch-add.component';
import { BranchShowComponent } from './branch-show/branch-show.component';
import { BranchDeleteComponent } from './branch-delete/branch-delete.component';
import { BranchUpdateComponent } from './branch-update/branch-update.component';

const routes: Routes = [
  { path: 'Bank', component: BankComponent },
  { path: 'Branch', component: BranchComponent },
  { path: 'Monitor', component: MonitorComponent },
  { path: 'Add-Bank', component: BankAddComponent },
  { path: 'Update-Bank', component: BankUpdateComponent },
  { path: 'Delete-Bank', component: BankDeleteComponent },
  { path: 'Show-Bank', component: BankShowComponent },
  { path: 'Add-Branch', component: BranchAddComponent },
  { path: 'Update-Branch', component: BranchUpdateComponent },
  { path: 'Delete-Branch', component: BranchDeleteComponent },
  { path: 'Show-Branch', component: BranchShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
