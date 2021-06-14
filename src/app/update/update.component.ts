import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SelectService} from '../services/select.service';
import {Country} from '../services/country';
import {State} from '../services/state';
import {CommonService} from "../services/common.service";

declare const alertMessageUpdate:any;
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateForm: FormGroup;
  isSubmitted = false;
  object2;
  details;
  uid;
  selectedCountry: Country = new Country(3, 'India');
  countries: Country[];
  states: State[];
  date;
  age;
  id;

  constructor(private http: HttpClient,
              private selectService: SelectService,
              private commonService: CommonService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);

    this.updateForm = this.formBuilder.group({
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

    this.commonService.getUser(localStorage.getItem('CID')).subscribe((result) => {
      this.object2 = result;
      if (Object.keys(result).length) {
        console.log(this.object2);
        this.details = this.object2[0];
        this.id = this.details.id;
      }
    }, (err) => err.message);
  }

  get formControls() {
    return this.updateForm.controls;
  }


  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((updateState) => updateState.countryid == countryid);
  }

  onDate(dob) {
    const date1 = new Date(dob);
    const date2 = new Date();
    // To calculate the time difference of two dates
    const Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.age = Math.round(Difference_In_Days / 360);
    console.log(this.age);

    if (this.age < 18) {
      this.updateForm.patchValue({citizen: 'Minor'});
    } else if (this.age > 18 && this.age <= 60) {
      this.updateForm.patchValue({citizen: 'Normal'});
    } else {
      this.updateForm.patchValue({citizen: 'Senior'});
    }
  }

  onAccountType(accType) {
    if (accType == 'saving') {
      this.updateForm.patchValue({deposit: '5000'});
    } else {
      this.updateForm.patchValue({deposit: '0'});
    }
  }

  submit() {
    if (this.updateForm.invalid) {
      return;
    }
    this.commonService.update(this.details, this.id);
    this.isSubmitted = true;
    this.router.navigateByUrl('/home');
    alertMessageUpdate();

  }
}
