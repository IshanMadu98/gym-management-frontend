import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'staff',
    loadChildren: () => import('./modules/staff/staff.module').then(m => m.StaffModule),
  },
  {
    path: 'member',
    loadChildren: () => import('./modules/member/member.module').then(m => m.MemberModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
