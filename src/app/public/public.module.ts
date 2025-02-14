import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './containers/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  {
    path: 'login', component: LoginComponent,

  }
]

@NgModule({
  declarations: [
    LoginComponent,
    LandingPageComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
