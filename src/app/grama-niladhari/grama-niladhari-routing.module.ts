import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GramaNiladhariComponent } from './grama-niladhari.component';
import { GnOnboardingComponent } from './components/onboarding/gn-onboarding/gn-onboarding.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar/sidebar.component';
import { GnDashboardComponent } from './components/dashboard/gn-dashboard/gn-dashboard/gn-dashboard.component';
import { MakeAnAppointmentComponent } from './components/user/appointment/makeAnAppointment/makeAnAppointment.component';

const routes: Routes = [{ path: '', component: GramaNiladhariComponent },
{ path: 'onboarding', component: GnOnboardingComponent },
{ path: 'dashboard', component:GnDashboardComponent},
{ path: 'appointment', component:MakeAnAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GramaNiladhariRoutingModule { }
