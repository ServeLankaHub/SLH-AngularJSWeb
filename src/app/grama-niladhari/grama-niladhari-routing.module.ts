import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GramaNiladhariComponent } from './grama-niladhari.component';
import { GnOnboardingComponent } from './components/onboarding/gn-onboarding/gn-onboarding.component';

const routes: Routes = [{ path: '', component: GramaNiladhariComponent },
{ path: 'onboarding', component: GnOnboardingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GramaNiladhariRoutingModule { }
