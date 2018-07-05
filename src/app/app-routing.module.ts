import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminAuthGuard} from './admin-auth-guard.service';
import {AdminComponent} from './admin/admin.component';
import {NoAccessComponent} from './no-access/no-access.component';
import {AuthGuard} from './services/authService/auth-guard.service';
import {HomeLayoutComponent} from './layouts/home-layout/home-layout.component';
import {LoginLayoutComponent} from './layouts/login-layout/login-layout.component';
import {DevicesListComponent} from './devices-list/devices-list.component';
import {NotificationListComponent} from "./notification-list/notification-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'list',
        component: DevicesListComponent,
        canActivate: [AdminAuthGuard]
      },
      {
        path: 'notificationList',
        component: NotificationListComponent,
        canActivate: [AdminAuthGuard]
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'no-access',
    component: NoAccessComponent
  },

  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

