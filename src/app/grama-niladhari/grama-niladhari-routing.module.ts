import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GramaNiladhariComponent } from './grama-niladhari.component';
import { GnOnboardingComponent } from './components/onboarding/gn-onboarding/gn-onboarding.component';
import { GnDashboardComponent } from './components/dashboard/gn-dashboard/gn-dashboard/gn-dashboard.component';
import { MakeAnAppointmentComponent } from './components/user/appointment/makeAnAppointment/makeAnAppointment.component';
import { CertificatesComponent } from './components/certificates/certificates.component';



const routes: Routes = [{ path: '', component: GramaNiladhariComponent },
{ path: 'onboarding', component: GnOnboardingComponent },
{ path: 'dashboard', component:GnDashboardComponent},
{ path: 'appointment', component:MakeAnAppointmentComponent},
{ path: 'certificates', component:CertificatesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GramaNiladhariRoutingModule { }
