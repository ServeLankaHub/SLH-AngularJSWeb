import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GramaNiladhariRoutingModule } from './grama-niladhari-routing.module';
import { GramaNiladhariComponent } from './grama-niladhari.component';
import { GnOnboardingComponent } from './components/onboarding/gn-onboarding/gn-onboarding.component';


@NgModule({
  declarations: [
    GramaNiladhariComponent,
    GnOnboardingComponent
  ],
  imports: [
    CommonModule,
    GramaNiladhariRoutingModule
  ]
})
export class GramaNiladhariModule { }
