import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GramaNiladhariRoutingModule } from './grama-niladhari-routing.module';
import { GramaNiladhariComponent } from './grama-niladhari.component';
import { GnOnboardingComponent } from './components/onboarding/gn-onboarding/gn-onboarding.component';
import { IconComponent } from './components/icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    GramaNiladhariComponent,
    GnOnboardingComponent,
    IconComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    GramaNiladhariRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class GramaNiladhariModule { }
