import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-gn-onboarding',
  templateUrl: './gn-onboarding.component.html',
  styleUrl: './gn-onboarding.component.css'
})
export class GnOnboardingComponent implements OnInit {

  onboardForm!:FormGroup

  constructor(private fb:FormBuilder) {}
  ngOnInit(): void {
    this.onboardForm =  this.fb.group({
      gnId:['', Validators.required],
      divisionId:['', Validators.required],
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      address:['', Validators.required],
      mobileNumber:['', Validators.required],
      officeAddress:['', Validators.required],
      dateOfBirth:['', Validators.required],
      joinedDate:['', Validators.required],

    })
    
  }

  onBoardSumbit(){

  }

}
