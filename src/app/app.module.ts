import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { SignupComponent } from './pages/signup/signup.component';

import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';

import { LoginComponent } from './pages/login/login.component';
import { SinglepageComponent } from './singlepage/singlepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    ArtformsComponent,
    SignupComponent,
   
    NavbarComponent,
    FooterComponent,
   
    LoginComponent,
        SinglepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
