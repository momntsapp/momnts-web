import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LandingPageComponent,
    AboutComponent,
    LegalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
