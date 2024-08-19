import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankComponent } from './bank/bank.component';
import { BranchComponent } from './branch/branch.component';
import { MonitorComponent } from './monitor/monitor.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    BranchComponent,
    MonitorComponent,

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
