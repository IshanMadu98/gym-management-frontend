import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../../shared/shared.module';
import { GymManagementComponent } from './admin-home/gym-management/gym-management.component';
import { AddUpdateGymDialogComponent } from './admin-home/gym-management/add-update-gym-dialog/add-update-gym-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: AdminHomeComponent,
    children: [
      { path: '', component: GymManagementComponent }
    ]
  },

];

@NgModule({
  declarations: [
    NavbarComponent,
    AdminHomeComponent,
    GymManagementComponent,
    AddUpdateGymDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
