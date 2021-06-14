import { NgModule } from '@angular/core';
import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectService } from './services/select.service';
import { LoanComponent } from './loan/loan.component';
import { HeaderComponent } from './home/header/header.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WelcomeComponent} from "./home/welcome/welcome.component";
import {ErrorNotFoundComponent} from "./error-not-found.component";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoanComponent,
    HeaderComponent,
    UpdateComponent,
    WelcomeComponent,
    ErrorNotFoundComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,


  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
