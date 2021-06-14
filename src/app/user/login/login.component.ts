import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {User} from "../../services/user";
import {CommonService} from "../../services/common.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              private commonService: CommonService) {
  }

  loginForm: FormGroup;
  isSubmitted = false;
  invalidMessage: string;
  checkCredentials: any;
  navigate = false;
  errorMessage :string;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.commonService.login(this.loginForm.value).subscribe((userCredentials: User) => {
      this.checkCredentials = userCredentials;
      if (Object.keys(userCredentials).length) {

        localStorage.setItem('ACCESS_TOKEN', this.checkCredentials[0].username);
        localStorage.setItem('CID', this.checkCredentials[0].cid);
        localStorage.setItem('NAME', this.checkCredentials[0].name);
        this.router.navigate(['home']);

      } else {
        this.invalidMessage = "Invalid Credentials";
      }
    }, (err) =>console.log(err));
  }
}
