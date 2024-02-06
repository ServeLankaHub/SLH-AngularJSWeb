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
import { AppoinmentsComponent } from './components/dashboard/appoinments/appoinments.component';
import { DailyFeedComponent } from './components/dashboard/daily-feed/daily-feed.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar/sidebar.component';
import { GnDashboardComponent } from './components/dashboard/gn-dashboard/gn-dashboard/gn-dashboard.component';
import { MakeAnAppointmentComponent } from './components/user/appointment/makeAnAppointment/makeAnAppointment.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { InputComponent } from './reusable/input/input.component';
import { SelectInputComponent } from './reusable/select-input/select-input.component';
import { FileInputComponent } from './reusable/file-input/file-input.component';
import { ButtonComponent } from './reusable/button/button.component';
import { CheckBoxComponent } from './reusable/check-box/check-box.component';
import { GnDetailsTableComponent } from './components/admin/gnDetailsTable/gnDetailsTable.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';




@NgModule({
  declarations: [
    GramaNiladhariComponent,
    GnOnboardingComponent,
    IconComponent,
    NavbarComponent,
    CalenderComponent,
    AppoinmentsComponent,
    DailyFeedComponent,
    FooterComponent,
    SidebarComponent,
    GnDashboardComponent,
    MakeAnAppointmentComponent,
    CertificatesComponent,
    InputComponent,
    SelectInputComponent,
    FileInputComponent,
    ButtonComponent,
    CheckBoxComponent,
    AdminDashboardComponent,
    GnDetailsTableComponent
   
  ],
  imports: [
    CommonModule,
    GramaNiladhariRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
})
export class GramaNiladhariModule { 
  
}
