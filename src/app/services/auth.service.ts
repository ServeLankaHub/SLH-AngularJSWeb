import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment,nestEnvironment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string = environment.apiUrl;
private nestApiUrl:string = nestEnvironment.nestApiUrl;
constructor(private http:HttpClient, private router:Router) { }

signup(signupObj:any){
  return this.http.post<any>(`${this.baseUrl}signup`, signupObj)
}
login(loginObj:any){
  return this.http.post<any>(`${this.baseUrl}login`,loginObj);
}
generateCertificate(formData:any){
  return this.http.post<any>(`${this.nestApiUrl}certificate/residential-certificate`,formData);
}

}
