import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminAuthGuard} from "./admin-auth-guard.service";
import {AdminComponent} from "./admin/admin.component";
import {NoAccessComponent} from "./no-access/no-access.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'no-access',
    component: NoAccessComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

