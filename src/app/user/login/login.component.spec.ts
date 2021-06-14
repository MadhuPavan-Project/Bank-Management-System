import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import {CommonService} from "../../services/common.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule,ReactiveFormsModule,RouterTestingModule],
      providers: [FormBuilder,FormsModule,CommonService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 controls',() =>{
    expect(component.loginForm.contains('username')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the username control required',() =>{
    let control = component.loginForm.get('username');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('should make the password control required',() =>{
    let control = component.loginForm.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('password length should be  6',() =>{
    let control = component.loginForm.get('password');
    control.setValue('abcd');
    expect(control.invalid).toBeTruthy();
  });

  it('should redirect to home page',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');
    component.loginForm.controls.username.setValue("siva");
    component.loginForm.controls.password.setValue("siva9693");

    component.login();
    fixture.detectChanges();
   // expect(spy).toHaveBeenCalledWith(['home']);
  });

  it('Should not go to home if loginForm is Invalid',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigate');

    component.login();
    fixture.detectChanges();

    expect(spy).not.toHaveBeenCalledWith(['home']);
   });

});
