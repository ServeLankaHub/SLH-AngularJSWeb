import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GramaNiladhariRoutingModule } from './grama-niladhari-routing.module';
import { GramaNiladhariComponent } from './grama-niladhari.component';
import { GnOnboardingComponent } from './components/onboarding/gn-onboarding/gn-onboarding.component';
import { IconComponent } from './components/icon/icon.component';


@NgModule({
  declarations: [
    GramaNiladhariComponent,
    GnOnboardingComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    GramaNiladhariRoutingModule
  ]
})
export class GramaNiladhariModule { }
