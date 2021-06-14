import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class CommonService{
  constructor(private http: HttpClient, private router: Router) {
  }
  checkCredentials:any;
  public  createUser(user) {
   this.http.post('http://localhost:3000/users', user).subscribe();
  }

  public login(userInfo: User) {

    return this.http
      .get<User>('http://localhost:3000/users' + '?username=' + userInfo.username + '&password=' + userInfo.password);
  }
  public getUser(id):Observable<User>{
    return this.http.get<User>('http://localhost:3000/users?cid='+id);

  }
  public update(user,id){
    const url = 'http://localhost:3000/users/' + id;
    this.http.put<any>(url,user).subscribe();
  }

  public loanDetails(loanForm){
    this.http.post('http://localhost:3000/loan', loanForm.value).subscribe();
  }

  public getLoanDetails(id):Observable<any>{
    return this.http.get<any>('http://localhost:3000/loan?customerId='+id);
  }
}
