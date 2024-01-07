import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-gn-onboarding',
  templateUrl: './gn-onboarding.component.html',
  styleUrl: './gn-onboarding.component.css'
})
export class GnOnboardingComponent implements OnInit {

  onboardForm!:FormGroup
  
  constructor() {}
  ngOnInit(): void {
    
  }

  onBoardSumbit(){

  }

}
