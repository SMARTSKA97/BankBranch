import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { BranchComponent } from './branch/branch.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
  { path: 'Bank', component: BankComponent },
  { path: 'Branch', component: BranchComponent },
  { path: 'Monitor', component: MonitorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
