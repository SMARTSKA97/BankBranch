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
  { path: 'Add_Bank', component: BankAddComponent },
  { path: 'Update_Bank', component: BankUpdateComponent },
  { path: 'Update_Bank/:id', component: BankUpdateComponent},
  { path: 'Delete_Bank', component: BankDeleteComponent },
  { path: 'Show_Bank', component: BankShowComponent },
  { path: 'Add_Branch', component: BranchAddComponent },
  { path: 'Add_Branch/:id', component: BranchAddComponent },
  { path: 'Update_Branch', component: BranchUpdateComponent },
  { path: 'Update_Branch/:id', component: BranchUpdateComponent},
  { path: 'Delete_Branch', component: BranchDeleteComponent },
  { path: 'Show_Branch', component: BranchShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
