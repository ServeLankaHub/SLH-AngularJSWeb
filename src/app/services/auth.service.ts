import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string = environment.apiUrl;
constructor(private http:HttpClient, private router:Router) { }

signup(signupObj:any){
  return this.http.post<any>(`${this.baseUrl}signup`, signupObj)
}
login(loginObj:any){
  return this.http.post<any>(`${this.baseUrl}login`,loginObj);
}

}
