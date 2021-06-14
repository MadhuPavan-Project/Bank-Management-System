import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoanComponent} from './loan/loan.component';
import {UpdateComponent} from './update/update.component';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {AuthGuard} from "./auth.guard";
import {WelcomeComponent} from "./home/welcome/welcome.component";
import {ErrorNotFoundComponent} from "./error-not-found.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'loan', component: LoanComponent, canActivate: [AuthGuard]},
  {path: 'update', component: UpdateComponent, canActivate: [AuthGuard]},
  {path: 'home', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'notfound', component: ErrorNotFoundComponent},
  {path: '**', redirectTo: '/notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
