import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
 loginForm!:FormGroup
  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router, private toast:NgToastService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
    
  }
  onLogin(){
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe({
      next:(res)=>{
        this.toast.success({detail:"Success!",summary:res.message,duration:5000})
        this.loginForm.reset();
        
      },
      error:(err)=>{
        this.toast.error({detail:"Error!", summary:"Something went wrong!",duration:5000})
      }
    })

  }

}
