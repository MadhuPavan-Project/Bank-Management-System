import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LoanComponent } from './loan.component';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers: [FormBuilder,FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain 6 fields in the form',()=>{
    expect(component.loanForm.contains('loantype')).toBeTruthy();
    expect(component.loanForm.contains('loanamount')).toBeTruthy();
    expect(component.loanForm.contains('loanApplyDate')).toBeTruthy();
    expect(component.loanForm.contains('loanIssueDate')).toBeTruthy();
    expect(component.loanForm.contains('rate')).toBeTruthy();
    expect(component.loanForm.contains('loanDuration')).toBeTruthy();
  });

  it('should make the loan type control required', () => {
    const control = component.loanForm.get('loantype');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Value provided for loan type', () => {
    const control = component.loanForm.get('loantype');
    control.setValue('Education');
    expect(control.valid).toBeTruthy();
  });

  it('should make the loan amount control required', () => {
    const control = component.loanForm.get('loanamount');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('loan amount provided', () => {
    const control = component.loanForm.get('loanamount');
    control.setValue('200000');
    expect(control.valid).toBeTruthy();
  });

  it('should make the loan applied date control required', () => {
    const control = component.loanForm.get('loanApplyDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Selected loan applied date ', () => {
    const control = component.loanForm.get('loanApplyDate');
    control.setValue('2021/06/10');
    expect(control.invalid).toBeFalsy();
  });

  it('should make the loan issued date control required', () => {
    const control = component.loanForm.get('loanIssueDate');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Selected  loan issued date ', () => {
    const control = component.loanForm.get('loanIssueDate');
    control.setValue('2021/06/10');
    expect(control.invalid).toBeFalsy();
  });


  it('should make the rate of interest control required', () => {
    const control = component.loanForm.get('rate');
    control.setValue('');
    expect(control.invalid).toBeTruthy();
  });

  it('Rate of interest for Personal loan', () => {
    component.onLoanSelect('personal');
   fixture.detectChanges();
    expect(component.rateOfInterest).toEqual(5);
  });

  it('Rate of interest for Education loan', () => {
    component.onLoanSelect('education');
    fixture.detectChanges();
    expect(component.rateOfInterest).toEqual(3);
  });

  it('should make the loan duration control required', () => {
    const control = component.loanForm.get('loanDuration');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Selected loan duration from options', () => {
    const control = component.loanForm.get('loanDuration');
    control.setValue('10');
    expect(control.invalid).toBeFalsy();
  });

  it('should reload the home page',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.loanForm.controls.loantype.setValue("Education");
    component.loanForm.controls.loanamount.setValue("1000");
    component.loanForm.controls.loanApplyDate.setValue("2020-05-05");
    component.loanForm.controls.loanIssueDate.setValue("2020-05-08");
    component.loanForm.controls.rate.setValue("5");
    component.loanForm.controls.loanDuration.setValue("10");

    component.submit();
    expect(spy).toHaveBeenCalledWith('/home');
  });

  it('should not go to home page if loanForm is Invalid',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, "navigateByUrl");

    component.submit();
    expect(spy).not.toHaveBeenCalledWith('/home');
  });

  it('Get Form controls from the form',()=>{
    expect(component.formControls).toBe(component.loanForm.controls);
  });

});
