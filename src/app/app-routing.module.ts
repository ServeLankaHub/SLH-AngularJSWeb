import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'grama-niladhari', loadChildren: () => import('./grama-niladhari/grama-niladhari.module').then(m => m.GramaNiladhariModule) },
  { path: 'login', component: LoginComponent },
  { path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
