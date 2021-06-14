import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RegisterComponent} from './register.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SelectService} from 'src/app/services/select.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
      providers: [SelectService, FormBuilder, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 24 controls', () => {
    expect(component.registerForm.contains('name')).toBeTruthy();
    expect(component.registerForm.contains('username')).toBeTruthy();
    expect(component.registerForm.contains('password')).toBeTruthy();
    expect(component.registerForm.contains('guardiantype')).toBeTruthy();
    expect(component.registerForm.contains('gname')).toBeTruthy();
    expect(component.registerForm.contains('address')).toBeTruthy();
    expect(component.registerForm.contains('citizenship')).toBeTruthy();
    expect(component.registerForm.contains('inputCountry')).toBeTruthy();
    expect(component.registerForm.contains('state')).toBeTruthy();
    expect(component.registerForm.contains('email')).toBeTruthy();
    expect(component.registerForm.contains('gender')).toBeTruthy();
    expect(component.registerForm.contains('maritalstatus')).toBeTruthy();
    expect(component.registerForm.contains('contact')).toBeTruthy();
    expect(component.registerForm.contains('dob')).toBeTruthy();
    expect(component.registerForm.contains('registerDate')).toBeTruthy();
    expect(component.registerForm.contains('accountType')).toBeTruthy();
    expect(component.registerForm.contains('branch')).toBeTruthy();
    expect(component.registerForm.contains('citizen')).toBeTruthy();
    expect(component.registerForm.contains('deposit')).toBeTruthy();
    expect(component.registerForm.contains('prooftype')).toBeTruthy();
    expect(component.registerForm.contains('docnumber')).toBeTruthy();
    expect(component.registerForm.contains('refername')).toBeTruthy();
    expect(component.registerForm.contains('refernumber')).toBeTruthy();
    expect(component.registerForm.contains('referaddress')).toBeTruthy();

  });

  it('name control should contain only alphabets and spaces', () => {
    const control = component.registerForm.get('name');
    control.setValue('abc123');
    expect(control.valid).toBeFalsy();
  });
  it('should make the username control required', () => {
    const control = component.registerForm.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should make the password of length at least 6', () => {
    const control = component.registerForm.get('password');
    control.setValue('abc');
    expect(control.valid).toBeFalsy();
  });

  it('should make the guardiantype control required', () => {
    const control = component.registerForm.get('guardiantype');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the guardiantype control required', () => {
    const control = component.registerForm.get('guardiantype');
    control.setValue('father');
    expect(control.valid).toBeTruthy();
  });

  it('should make the guardian name control required', () => {
    const control = component.registerForm.get('gname');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the guardian name control required', () => {
    const control = component.registerForm.get('gname');
    control.setValue('abc');
    expect(control.invalid).toBeFalsy();
  });

  it('should make the citizenship control required', () => {
    const control = component.registerForm.get('citizenship');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the address control required', () => {
    const control = component.registerForm.get('address');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the maritalstatus control required', () => {
    const control = component.registerForm.get('maritalstatus');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the dob control required', () => {
    const control = component.registerForm.get('dob');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the registerDate control required', () => {
    const control = component.registerForm.get('registerDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('should make the accountType control required', () => {
    const control = component.registerForm.get('accountType');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the branch control required', () => {
    const control = component.registerForm.get('branch');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the citizen control required', () => {
    const control = component.registerForm.get('citizen');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the deposit control required', () => {
    const control = component.registerForm.get('deposit');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the prooftype control required', () => {
    const control = component.registerForm.get('prooftype');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the docnumber control required', () => {
    const control = component.registerForm.get('docnumber');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the refername control required', () => {
    const control = component.registerForm.get('refername');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the refernumber control required', () => {
    const control = component.registerForm.get('refernumber');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the referaddress control required', () => {
    const control = component.registerForm.get('referaddress');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should contain correct email format', () => {
    const control = component.registerForm.get('email');
    control.setValue('abcd');
    expect(control.invalid).toBeTruthy();
  });
  it('contact should contain only numeric values', () => {
    const control = component.registerForm.get('contact');
    control.setValue('abcd');
    expect(control.invalid).toBeTruthy();
  });

  it('contact length should contain only 10 digits', () => {
    const control = component.registerForm.get('contact');
    control.setValue('1234567890');
    expect(control.valid).toBeTruthy();
  });

  it('should return customer to the login page', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigateByUrl');

    component.registerForm.controls.name.setValue('siva');
    component.registerForm.controls.username.setValue('siva');
    component.registerForm.controls.password.setValue('siva9693');
    component.registerForm.controls.guardiantype.setValue('Friend');
    component.registerForm.controls.gname.setValue('abcd');
    component.registerForm.controls.address.setValue('Pune');
    component.registerForm.controls.citizenship.setValue('Indian');
    component.registerForm.controls.inputCountry.setValue('India');
    component.registerForm.controls.state.setValue('Maharashtra');
    component.registerForm.controls.email.setValue('abc@gmail.com');
    component.registerForm.controls.gender.setValue('Male');
    component.registerForm.controls.maritalstatus.setValue('Unmarried');
    component.registerForm.controls.contact.setValue('9900000000');
    component.registerForm.controls.dob.setValue('1998-09-09');
    component.registerForm.controls.registerDate.setValue('2020-05-05');
    component.registerForm.controls.accountType.setValue('Salary');
    component.registerForm.controls.branch.setValue('abc');
    component.registerForm.controls.citizen.setValue('Normal');
    component.registerForm.controls.deposit.setValue('0');
    component.registerForm.controls.prooftype.setValue('abc');
    component.registerForm.controls.docnumber.setValue('AAAAA123AAAA');
    component.registerForm.controls.refername.setValue('abc');
    component.registerForm.controls.refernumber.setValue('123');
    component.registerForm.controls.referaddress.setValue('Pune');

    component.submit();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('/login');
  });

  it('Should not go to login if registerForm is Invalid', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigateByUrl');
    fixture.detectChanges();
    expect(spy).not.toHaveBeenCalledWith('/login');
  });

  it('should return specific states when country is selected', () => {
    component.onSelect('1');
    fixture.detectChanges();
    expect(component.states.length).toBe(4);
  });

  it('should set deposit value as 5000 for saving', () => {
    component.onAccountType('saving');
    fixture.detectChanges();
    expect(component.registerForm.value.deposit).toEqual('5000');
  });
  it('should set deposit value as 0 for salary', () => {
    component.onAccountType('salary');
    fixture.detectChanges();
    expect(component.registerForm.value.deposit).toEqual('0');
  });

  it('should show status as minor when age in under 18', () => {
    component.onDate('2015-05-05');
    fixture.detectChanges();
    expect(component.registerForm.value.citizen).toEqual('Minor');
  });

  it('should show status as normal when age is between 18 to 60', () => {
    component.onDate('1998-05-05');
    fixture.detectChanges();
    expect(component.registerForm.value.citizen).toEqual('Normal');
  });

  it('should show status as senior when age is above 60', () => {
    component.onDate('1950-05-05');
    fixture.detectChanges();
    expect(component.registerForm.value.citizen).toEqual('Senior');
  });
});
