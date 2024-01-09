import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GramaNiladhariRoutingModule } from './grama-niladhari-routing.module';
import { GramaNiladhariComponent } from './grama-niladhari.component';
import { GnOnboardingComponent } from './components/onboarding/gn-onboarding/gn-onboarding.component';
import { IconComponent } from './components/icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalenderComponent } from './components/dashboard/calender/calender.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    GramaNiladhariComponent,
    GnOnboardingComponent,
    IconComponent,
    NavbarComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    GramaNiladhariRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule
    
  ]
})
export class GramaNiladhariModule { 
  
}
