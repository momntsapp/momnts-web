import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'admin', component: AdminComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'legal', component: LegalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
