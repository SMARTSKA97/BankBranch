//Angular Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PrimeNG Components
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';

//Home Components
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';
import { BranchComponent } from './branch/branch.component';
import { MonitorComponent } from './monitor/monitor.component';

//Bank Individual Components
import { BankAddComponent } from './bank-add/bank-add.component';
import { BankDeleteComponent } from './bank-delete/bank-delete.component';
import { BankShowComponent } from './bank-show/bank-show.component';
import { BankUpdateComponent } from './bank-update/bank-update.component';

//Branch Individual Components
import { BranchShowComponent } from './branch-show/branch-show.component';
import { BranchAddComponent } from './branch-add/branch-add.component';
import { BranchUpdateComponent } from './branch-update/branch-update.component';
import { BranchDeleteComponent } from './branch-delete/branch-delete.component';





@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    BranchComponent,
    MonitorComponent,
    BankAddComponent,
    BankDeleteComponent,
    BankShowComponent,
    BankUpdateComponent,
    BranchShowComponent,
    BranchAddComponent,
    BranchUpdateComponent,
    BranchDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CardModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
