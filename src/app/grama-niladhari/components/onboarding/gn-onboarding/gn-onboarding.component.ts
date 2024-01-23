import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-gn-onboarding',
  templateUrl: './gn-onboarding.component.html',
  styleUrl: './gn-onboarding.component.css'
})
export class GnOnboardingComponent implements OnInit {

  onboardForm!:FormGroup

  constructor(private fb:FormBuilder, private auth:AuthService, private toast:NgToastService) {}
  ngOnInit(): void {
    this.onboardForm =  this.fb.group({
      GN_ID:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      address:['', Validators.required],
      mobileNumber:['', Validators.required],
      officeAddress:['', Validators.required],
      dateofBirth:['', Validators.required],
      joinedDate:['', Validators.required],

    })
    
  }

  onBoardSumbit(){
    console.log(this.onboardForm.value);
    this.auth.signup(this.onboardForm.value).subscribe({
      next:(res) =>{
        this.toast.success({detail:"Success!", summary:res.message, duration:5000})
        this.onboardForm.reset();
      },
      error:(err) =>{
        this.toast.error({detail:"Error!", summary:"Something went wrong!", duration:5000})
      }
    })

  }

}
