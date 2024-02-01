import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {genderOptions,
        durationOptions,
        wSLOptions,
        religonOptions,
        districtOptions,
        civilStatusOptions,
        certificateType,
        characterOptions,
        sociableOptions,
        lawOptions,
        } from '../../select.input.options/options';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  genderOptions = genderOptions;
  durationOptions = durationOptions;
  wSLOptions = wSLOptions;
  religonOptions = religonOptions;
  districtOptions = districtOptions;
  civilStatusOptions = civilStatusOptions;
  certificateType = certificateType;
  characterOptions = characterOptions;
  sociableOptions = sociableOptions;
  lawOptions = lawOptions;

  constructor() { }

  ngOnInit() {
  }

  formGroup = new FormGroup({
    certificateType: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    division: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    divisionId: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    civilstatus: new FormControl('', Validators.required),
    wSL: new FormControl('', Validators.required),
    religion: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    periods: new FormControl('', Validators.required),
    electrol: new FormControl('', Validators.required),
    fatherDetails: new FormControl('', Validators.required),
    purpose: new FormControl('', Validators.required),
    periodsOfResidence: new FormControl('', Validators.required),
    proof: new FormControl('', Validators.required),
    law: new FormControl('', Validators.required),
    character: new FormControl('', Validators.required),
    sociable: new FormControl('', Validators.required),
    remarks: new FormControl('', Validators.required),
    gnSign: new FormControl('', Validators.required),
    applicantSign: new FormControl('', Validators.required)
  })

}
