import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GramaNiladhariRoutingModule } from './grama-niladhari-routing.module';
import { GramaNiladhariComponent } from './grama-niladhari.component';
import { GnOnboardingComponent } from './components/onboarding/gn-onboarding/gn-onboarding.component';
import { IconComponent } from './components/icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GramaNiladhariComponent,
    GnOnboardingComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    GramaNiladhariRoutingModule,
    ReactiveFormsModule
  ]
})
export class GramaNiladhariModule { }
