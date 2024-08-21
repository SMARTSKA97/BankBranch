import { Component, OnInit } from '@angular/core';
import { BranchService } from './branch.service';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
})
export class BranchComponent {
  branchObj : Branch = new Branch();
}

export class Branch
{
  ID : number;
  Branch_Name : string;
  Address : string;
  State : string;
  Pin_Code : number;
  MICR_Code : number;
  IFSC_Code : string;
  Bank_ID : number;
  constructor()
  {
    this.ID=0;
    this.Branch_Name="";
    this.Address="";
    this.State="";
    this.Pin_Code=0;
    this.MICR_Code=0;
    this.IFSC_Code="";
    this.Bank_ID=0;
  }
}
