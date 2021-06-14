import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {CommonService} from "../services/common.service";

declare const alertMessageLoan:any;
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanForm: FormGroup;
  isSubmitted = false;
  preOption;
  duration;
  date = new Date;
  time: Date;
  cid;
  name:any;
  rateOfInterest;

  constructor(private http:HttpClient, private router: Router, private formBuilder: FormBuilder,private commonService:CommonService) {
    setInterval(() => {
      this.time = new Date();
      console.log(this.time);
    }, 1000);
  }

  ngOnInit(): void {

    this.cid = localStorage.getItem('CID');
    this.name = localStorage.getItem('NAME');
    this.loanForm = this.formBuilder.group({
      loantype: ['', Validators.required],
      loanamount: ['', Validators.required],
      loanApplyDate: ['', Validators.required],
      loanIssueDate: ['', Validators.required],
      rate: ['', Validators.required],
      loanDuration: ['', Validators.required],
      customerId:this.cid
    });
  }

  get formControls() {

    return this.loanForm.controls;

  }

  onLoanSelect(loanType) {
    if (loanType == 'education') {
      this.rateOfInterest = 3;
    } else if (loanType == 'personal') {
      this.rateOfInterest = 5;
    }
  }

  private handleError (error: Response | any) {
//Your other codes

    if (error.status == 0){ //or whatever condition you like to put
      this.router.navigate(['/error']);
    }
  }

  submit() {
    console.log(this.loanForm.value);

    this.isSubmitted = true;

    if (this.loanForm.invalid) {
      return;
    }
    this.commonService.loanDetails(this.loanForm);
    this.router.navigateByUrl('/home');
    alertMessageLoan(this.cid,this.name,this.loanForm.value.loantype);    // window.location.reload();
  }
}
