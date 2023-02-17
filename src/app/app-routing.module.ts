import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformsComponent } from './pages/artforms/artforms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SinglepageComponent } from './singlepage/singlepage.component';


const routes: Routes = [
  {
    path: '', component : HomepageComponent
  },

  {
    path: 'artforms', component :ArtformsComponent
  },
  {
    path: 'contact', component : ContactComponent
  },


  {
    path: 'login', component : LoginComponent

  },



  {
    path: 'singlepage', component : SinglepageComponent

  },


  {
    path: 'signup', component :SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
