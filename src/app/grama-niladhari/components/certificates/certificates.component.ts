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
        divisionalSecretariatsDivOptions,
        gnDivisionNameOptions,
        gnDivisionNumberOptions
        } from '../../select.input.options/options';
import { AuthService } from '../../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  isChecked: boolean = false;
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
  divisionalSecretariatsDivOptions = divisionalSecretariatsDivOptions;
  gnDivisionNameOptions = gnDivisionNameOptions;
  gnDivisionNumberOptions = gnDivisionNumberOptions;
  constructor(private auth:AuthService, private toast:NgToastService) { }

  ngOnInit() {
  }

  formGroup = new FormGroup({
    certificateType: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    divisionalSecretariatsDiv: new FormControl('', Validators.required),
    personallyKnown: new FormControl('', Validators.required),
    sinceWhenKnown: new FormControl('', Validators.required),
    gramaNiladhariDivName: new FormControl('', Validators.required),
    gramaNiladhariDivNum: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    civilStatus: new FormControl('', Validators.required),
    isSriLankan: new FormControl('', Validators.required),
    religion: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    periods: new FormControl('', Validators.required),
    electoralRegisterNumber: new FormControl('', Validators.required),
    nameOfFather: new FormControl('', Validators.required),
    addressOfFather: new FormControl('', Validators.required),
    purposeOfCertificate: new FormControl('', Validators.required),
    periodsOfResidence: new FormControl('', Validators.required),
    proof: new FormControl('', Validators.required),
    convictedByCourtOfLaw: new FormControl('', Validators.required),
    character: new FormControl('', Validators.required),
    takenPartInPublicActivities: new FormControl('', Validators.required),
    remarks: new FormControl(''),
    // gnSign: new FormControl('', Validators.required),
    // applicantSign: new FormControl('', Validators.required)
  })

  handleCheckBoxChange(event: any) {
    this.isChecked = event.target.checked;
  }
  onGenerateCertificate(){
    console.log(this.formGroup.value);
    this.auth.generateCertificate(this.formGroup.value).subscribe({
      next:(res)=>{
        this.toast.success({detail:"Success!",summary:res.message, duration:5000})
        this.formGroup.reset();

      },
      error:(err)=>{
        this.toast.error({detail:"Error!",summary:"Something went wrong!", duration:5000})
      }
    })

  }

}
