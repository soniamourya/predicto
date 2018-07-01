import {AuthHttp, AuthConfig} from 'angular2-jwt/angular2-jwt';
import {AdminAuthGuard} from './admin-auth-guard.service';
import {AuthGuard} from './services/authService/auth-guard.service';
import {MockBackend} from '@angular/http/testing';
import {fakeBackendProvider} from './helpers/fake-backend';
import {AuthService} from './services/authService/auth.service';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MaterialAppModule} from './ngmaterial.module';

import {HttpModule, Http, BaseRequestOptions} from '@angular/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HealthSummaryCardComponent} from './cards/health-summary-card/health-summary-card.component';
import {CriticalDevicesCardComponent} from './cards/critical-devices-card/critical-devices-card.component';
import {CriticalLocationsCardComponent} from './cards/critical-locations-card/critical-locations-card.component';
import {AllDevicesCardComponent} from './cards/all-devices-card/all-devices-card.component';
import {AllLocationsCardComponent} from './cards/all-locations-card/all-locations-card.component';
import {UserInfoCardComponent} from './cards/user-info-card/user-info-card.component';
import {AdminComponent} from './admin/admin.component';
import {NoAccessComponent} from './no-access/no-access.component';

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token'
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    HealthSummaryCardComponent,
    CriticalDevicesCardComponent,
    CriticalLocationsCardComponent,
    AllDevicesCardComponent,
    AllLocationsCardComponent,
    UserInfoCardComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    AuthHttp,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },

    // For creating a mock back-end. You don't need these in a real app.
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
