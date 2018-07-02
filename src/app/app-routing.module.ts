import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminAuthGuard} from "./admin-auth-guard.service";
import {AdminComponent} from "./admin/admin.component";
import {NoAccessComponent} from "./no-access/no-access.component";
import {AuthGuard} from "./services/authService/auth-guard.service";
import {HomeLayoutComponent} from "./layouts/home-layout/home-layout.component";
import {LoginLayoutComponent} from "./layouts/login-layout/login-layout.component";

const routes: Routes = [
  {
    path: '',                       // {1}
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],       // {2}
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent   // {3}
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminAuthGuard]
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent, // {4}
    children: [
      {
        path: 'login',
        component: LoginComponent   // {5}
      }
    ]
  },
    {
    path: 'no-access',
    component: NoAccessComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

