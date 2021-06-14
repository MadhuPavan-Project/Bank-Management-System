import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Country} from '../../services/country';
import {SelectService} from '../../services/select.service';
import {State} from '../../services/state';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {User} from "../../services/user";
import {CommonService} from "../../services/common.service";

declare const alertRegisterSuccess:any;
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isSubmitted = false;
  selectedCountry: Country = new Country(3, "India");
  countries: Country[];
  states: State[];
  cid;
  accountNumber;
  registerForm: FormGroup;
  date = new Date;
  age;
  invalidMessage: string;

  constructor(private selectService: SelectService,
              private commonService: CommonService,
              private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      guardiantype: ['', Validators.required],
      gname: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      citizenship: ['', Validators.required],
      inputCountry: ['', Validators.required],
      state: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      maritalstatus: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      dob: ['', Validators.required],
      registerDate: [(new Date()).toISOString().substring(0, 10), Validators.required],
      accountType: ['', Validators.required],
      branch: ['', Validators.required],
      citizen: ['', Validators.required],
      deposit: ['', Validators.required],
      prooftype: ['', Validators.required],
      docnumber: ['', [Validators.required, Validators.pattern('^[A-Z0-9]{12}$')]],
      refername: ['', Validators.required],
      refernumber: ['', Validators.required],
      referaddress: ['', Validators.required]
    });
  }

  get formControls() {
    return this.registerForm.controls;
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((stateSelect) => stateSelect.countryid == countryid);

  }

  onDate(dob) {
    const date1 = new Date(dob);
    const date2 = new Date();
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.age = Math.round(Difference_In_Days / 360);
    console.log(this.age);

    if (this.age < 18) {
      this.registerForm.patchValue({citizen: 'Minor'});
    } else if (this.age > 18 && this.age <= 60) {
      this.registerForm.patchValue({citizen: 'Normal'});
    } else {
      this.registerForm.patchValue({citizen: 'Senior'});
    }
  }

  onAccountType(accType) {
    if (accType == 'saving') {
      this.registerForm.patchValue({deposit: '5000'});
    } else {
      this.registerForm.patchValue({deposit: '0'});
    }
  }


  submit() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.registerForm.value.cid = 'R-' + Math.floor(Math.random() * 1000);
    this.registerForm.value.accountNumber = Math.floor(Math.random() * 10000000000000000);
    this.commonService.createUser(this.registerForm.value);
    this.router.navigateByUrl('/login');
    alertRegisterSuccess();
  }

}
