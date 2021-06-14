import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormBuilder, FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SelectService} from 'src/app/services/select.service';

import {UpdateComponent} from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [SelectService, FormBuilder, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 24 controls', () => {
    expect(component.updateForm.contains('name')).toBeTruthy();
    expect(component.updateForm.contains('username')).toBeTruthy();
    expect(component.updateForm.contains('password')).toBeTruthy();
    expect(component.updateForm.contains('guardiantype')).toBeTruthy();
    expect(component.updateForm.contains('gname')).toBeTruthy();
    expect(component.updateForm.contains('address')).toBeTruthy();
    expect(component.updateForm.contains('citizenship')).toBeTruthy();
    expect(component.updateForm.contains('inputCountry')).toBeTruthy();
    expect(component.updateForm.contains('state')).toBeTruthy();
    expect(component.updateForm.contains('email')).toBeTruthy();
    expect(component.updateForm.contains('gender')).toBeTruthy();
    expect(component.updateForm.contains('maritalstatus')).toBeTruthy();
    expect(component.updateForm.contains('contact')).toBeTruthy();
    expect(component.updateForm.contains('dob')).toBeTruthy();
    expect(component.updateForm.contains('registerDate')).toBeTruthy();
    expect(component.updateForm.contains('accountType')).toBeTruthy();
    expect(component.updateForm.contains('branch')).toBeTruthy();
    expect(component.updateForm.contains('citizen')).toBeTruthy();
    expect(component.updateForm.contains('deposit')).toBeTruthy();
    expect(component.updateForm.contains('prooftype')).toBeTruthy();
    expect(component.updateForm.contains('docnumber')).toBeTruthy();
    expect(component.updateForm.contains('refername')).toBeTruthy();
    expect(component.updateForm.contains('refernumber')).toBeTruthy();
    expect(component.updateForm.contains('referaddress')).toBeTruthy();

  });

  it('name control should contain only alphabets and spaces', () => {
    const control = component.updateForm.get('name');
    control.setValue('abc123');
    expect(control.valid).toBeFalsy();
  });
  it('should make the username control required', () => {
    const control = component.updateForm.get('username');
    control.setValue('siva');
    expect(control.valid).toBeTruthy();
  });
  it('should make the password of length at least 6', () => {
    const control = component.updateForm.get('password');
    control.setValue('abc');
    expect(control.valid).toBeFalsy();
  });

  it('should make the guardiantype control required', () => {
    const control = component.updateForm.get('guardiantype');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the guardiantype control required', () => {
    const control = component.updateForm.get('guardiantype');
    control.setValue('father');
    expect(control.valid).toBeTruthy();
  });

  it('should make the guardian name control required', () => {
    const control = component.updateForm.get('gname');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the guardian name control required', () => {
    const control = component.updateForm.get('gname');
    control.setValue('');
    expect(control.invalid).toBeTruthy();
  });

  it('provided guardian name in the field', () => {
    const control = component.updateForm.get('gname');
    control.setValue('abc');
    expect(control.invalid).toBeFalsy();
  });

  it('should make the citizenship control required', () => {
    const control = component.updateForm.get('citizenship');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('provided citizenship in the field', () => {
    const control = component.updateForm.get('citizenship');
    control.setValue('Indian');
    expect(control.valid).toBeTruthy();
  });

  it('should make the address control required', () => {
    const control = component.updateForm.get('address');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('provided address in the field', () => {
    const control = component.updateForm.get('address');
    control.setValue('Tambaram,chennai,Highway 45');
    expect(control.valid).toBeTruthy();
  });

  it('should make the maritalstatus control required', () => {
    const control = component.updateForm.get('maritalstatus');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Selected marital status from options', () => {
    const control = component.updateForm.get('maritalstatus');
    control.setValue('unmarried');
    expect(control.valid).toBeTruthy();
  });

  it('should make the dob control required', () => {
    const control = component.updateForm.get('dob');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Given date of birth for the input field', () => {
    const control = component.updateForm.get('dob');
    control.setValue('1998/06/1998');
    expect(control.valid).toBeTruthy();
  });

  it('should make the registerDate control required', () => {
    const control = component.updateForm.get('registerDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Selected registerDate for the field', () => {
    const control = component.updateForm.get('registerDate');
    control.setValue('2021/06/10');
    expect(control.invalid).toBeFalsy();
  });

  it('should make the accountType control required', () => {
    const control = component.updateForm.get('accountType');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('selected  accountType form options', () => {
    const control = component.updateForm.get('accountType');
    control.setValue('salary');
    expect(control.valid).toBeTruthy();
  });

  it('should make the branch control required', () => {
    const control = component.updateForm.get('branch');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Entered branch name for the field', () => {
    const control = component.updateForm.get('branch');
    control.setValue('SBI');
    expect(control.invalid).toBeFalsy();
  });

  it('should make the citizen control required', () => {
    const control = component.updateForm.get('citizen');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should show status as minor when age in under 18', () => {
    component.onDate('2015-05-05');
    fixture.detectChanges();
    expect(component.updateForm.value.citizen).toEqual('Minor');
  });

  it('should show status as normal when age is between 18 to 60', () => {
    component.onDate('1998-05-05');
    fixture.detectChanges();
    expect(component.updateForm.value.citizen).toEqual('Normal');
  });

  it('should show status as senior when age is above 60', () => {
    component.onDate('1950-05-05');
    fixture.detectChanges();
    expect(component.updateForm.value.citizen).toEqual('Senior');
  });

  it('should make the deposit control required', () => {
    const control = component.updateForm.get('deposit');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should set deposit value as 5000 for saving', () => {
    component.onAccountType('saving');
    fixture.detectChanges();
    expect(component.updateForm.value.deposit).toEqual('5000');
  });

  it('should set deposit value as 0 for salary', () => {
    component.onAccountType('salary');
    fixture.detectChanges();
    expect(component.updateForm.value.deposit).toEqual('0');
  });


  it('should make the prooftype control required', () => {
    const control = component.updateForm.get('prooftype');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the docnumber control required', () => {
    const control = component.updateForm.get('docnumber');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the refername control required', () => {
    const control = component.updateForm.get('refername');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the refernumber control required', () => {
    const control = component.updateForm.get('refernumber');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the referaddress control required', () => {
    const control = component.updateForm.get('referaddress');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should contain correct email format', () => {
    const control = component.updateForm.get('email');
    control.setValue('abcd');
    expect(control.invalid).toBeTruthy();
  });
  it('contact should contain only numeric values', () => {
    const control = component.updateForm.get('contact');
    control.setValue('abcd');
    expect(control.invalid).toBeTruthy();
  });

  it('contact length should contain only 10 digits', () => {
    const control = component.updateForm.get('contact');
    control.setValue('1234567890');
    expect(control.valid).toBeTruthy();
  });

  it('should return specific states when country is selected', () => {
    component.onSelect("1");
    fixture.detectChanges();

    expect(component.states.length).toBe(4);
  });
  it('should return home page', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.updateForm.controls.name.setValue('Siva Pallem');
    component.updateForm.controls.username.setValue('siva');
    component.updateForm.controls.password.setValue('siva9693');
    component.updateForm.controls.guardiantype.setValue('Friend');
    component.updateForm.controls.gname.setValue('abcd');
    component.updateForm.controls.address.setValue('Pune');
    component.updateForm.controls.citizenship.setValue('Indian');
    component.updateForm.controls.inputCountry.setValue('India');
    component.updateForm.controls.state.setValue('Maharashtra');
    component.updateForm.controls.email.setValue('abc@gmail.com');
    component.updateForm.controls.gender.setValue('Male');
    component.updateForm.controls.maritalstatus.setValue('Unmarried');
    component.updateForm.controls.contact.setValue('9900000000');
    component.updateForm.controls.dob.setValue('1998-09-09');
    component.updateForm.controls.registerDate.setValue('2020-05-05');
    component.updateForm.controls.accountType.setValue('Salary');
    component.updateForm.controls.branch.setValue('abc');
    component.updateForm.controls.citizen.setValue('Normal');
    component.updateForm.controls.deposit.setValue('0');
    component.updateForm.controls.prooftype.setValue('abc');
    component.updateForm.controls.docnumber.setValue('AAAAA123AAAA');
    component.updateForm.controls.refername.setValue('abc');
    component.updateForm.controls.refernumber.setValue('123');
    component.updateForm.controls.referaddress.setValue('Pune');


    component.submit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('/home');
  });

  it('should not go to home page if UpdateForm is Invalid', () => {
    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.submit();
    expect(spy).not.toHaveBeenCalledWith('/home');
  });

  it('Get Form controls from the form', () => {
    expect(component.formControls).toBe(component.updateForm.controls);
  });
});
