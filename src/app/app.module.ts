import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {
  fakeBackendInterceptorService
} from './utilities/fake-backend-interceptor.service';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HealthSummaryCardComponent} from './cards/health-summary-card/health-summary-card.component';
import {CriticalDevicesCardComponent} from './cards/critical-devices-card/critical-devices-card.component';
import {CriticalLocationsCardComponent} from './cards/critical-locations-card/critical-locations-card.component';
import {AllDevicesCardComponent} from './cards/all-devices-card/all-devices-card.component';
import {AllLocationsCardComponent} from './cards/all-locations-card/all-locations-card.component';
import {UserInfoCardComponent} from './cards/user-info-card/user-info-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HealthSummaryCardComponent,
    CriticalDevicesCardComponent,
    CriticalLocationsCardComponent,
    AllDevicesCardComponent,
    AllLocationsCardComponent,
    UserInfoCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    fakeBackendInterceptorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
