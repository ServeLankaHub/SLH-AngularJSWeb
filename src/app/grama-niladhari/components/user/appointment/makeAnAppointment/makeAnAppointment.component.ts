import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makeAnAppointment',
  templateUrl: './makeAnAppointment.component.html',
  styleUrls: ['./makeAnAppointment.component.css']
})
export class MakeAnAppointmentComponent implements OnInit {
  appointmentForm! : FormGroup
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void{
    this.appointmentForm = this.fb.group({
      divisionId:['', Validators.required],
      date:['', Validators.required],
      reason:['', Validators.required],
      NIC:['', Validators.required],
      fullName:['', Validators.required],
      contact:[ '', Validators.required],
    })
  }
  onCancel(){
this.router.navigate(['grama-niladhari/dashboard'])
  }

}
