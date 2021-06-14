import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {CommonService} from "../../services/common.service";


@Component({
    selector: 'welcome-app',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css'],
  }
)
export class WelcomeComponent implements OnInit {
  time: Date;
  details = [];
  object2: any;
  loanDetails = [];
  isSubmitted = false;
  characters;
  cid;
  name;
  checkCredentials;
  invalidMessage;
  valid: boolean;
  knowDetailsStatus = false;
  customerDetails;

  constructor(private commonService: CommonService,
              private http: HttpClient,
              private authService: AuthService,
              private router: Router) {
    setInterval(() => {
      this.time = new Date();
    }, 1000);

  }

  ngOnInit(): void {
    this.characters = ["loantype", "loanamount", "loanApplyDate", "loanIssueDate", "rate", "loanDuration"];
    this.customerDetails = ["name", "cid", "accountNumber", "gender", "maritalstatus", "dob", "citizenship", "citizen",
      "contact", "email", "registerDate", "accountType", "prooftype", "refername"];
    this.commonService.getUser(localStorage.getItem('CID'))
      .subscribe((result) => {
        this.object2 = result;
        for (const items of this.object2) {
          if (items.username === localStorage.getItem('ACCESS_TOKEN')) {
            console.log(items);
            this.details.push(items);
            this.cid = items.cid;
            if (items.gender == 'male') {
              this.name = 'Mr. ' + items.name.toUpperCase();
            } else if (items.gender == 'female') {
              if (items.maritalstatus == 'married') {
                this.name = 'Mrs. ' + items.name.toUpperCase();
              } else {
                this.name = 'Ms. ' + items.name.toUpperCase();
              }
            } else {
              this.name = items.toUpperCase();
            }
          }
        }
      });

    this.commonService.getLoanDetails(localStorage.getItem('CID')).subscribe((result) => {
      this.checkCredentials = result;
      if (Object.keys(result).length) {
        for (let loan of this.checkCredentials) {
          this.loanDetails.push(loan);
          console.log(this.loanDetails);
          this.valid = true;
        }
      } else {
        this.valid = false;
        this.invalidMessage = "Sorry, looks like no loan history available to display!!!";
      }
      return false;
    }, (err) => console.log(err));
  }

  submit() {
    this.isSubmitted = true;
    this.knowDetailsStatus = false;
  }

  knowDetails() {
    this.knowDetailsStatus = true;
    this.isSubmitted = false;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
