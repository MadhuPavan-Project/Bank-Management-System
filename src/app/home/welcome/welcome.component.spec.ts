import {ComponentFixture, TestBed} from '@angular/core/testing';
import {WelcomeComponent} from "./welcome.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FormBuilder, FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {LoanComponent} from "../../loan/loan.component";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LoanComponent,FormBuilder, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on Submitting the for for loan details', () => {
    component.submit();
    expect(component.isSubmitted).toEqual(true);
  });

  it('Submitting the for for loan details', () => {
    component.submit();
    expect(component.knowDetailsStatus).toEqual(false);
  });

  it('on Submitting the for for loan details', () => {
    component.knowDetails();
    expect(component.isSubmitted).toEqual(false);
  });

  it('Submitting the for for loan details', () => {
    component.knowDetails();
    expect(component.knowDetailsStatus).toEqual(true);
  });

  it('should redirect the customer to the login page',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');

    component.logout();
    expect(spy).toHaveBeenCalledWith('/login');
  });
});
