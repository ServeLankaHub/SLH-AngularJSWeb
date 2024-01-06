import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'grama-niladhari', loadChildren: () => import('./grama-niladhari/grama-niladhari.module').then(m => m.GramaNiladhariModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
