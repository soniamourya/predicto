import {Component, NgModule, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Location} from '@angular/common';
import {AppComponent} from '../app.component';
import {AllLocationsCardComponent} from '../cards/all-locations-card/all-locations-card.component';
import {MaterialAppModule} from '../ngmaterial.module';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {UserInfoCardComponent} from '../cards/user-info-card/user-info-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {CriticalDevicesCardComponent} from '../cards/critical-devices-card/critical-devices-card.component';
import {AppRoutingModule} from '../app-routing.module';
import {fakeBackendInterceptorService} from '../utilities/fake-backend-interceptor.service';
import {AllDevicesCardComponent} from '../cards/all-devices-card/all-devices-card.component';
import {HealthSummaryCardComponent} from '../cards/health-summary-card/health-summary-card.component';
import {CriticalLocationsCardComponent} from '../cards/critical-locations-card/critical-locations-card.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private http: HttpClient, private location: Location) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
      // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (true) {
      const status = null;
      const body = new HttpParams().set('username', this.email.value).set('password', this.password.value);
      console.log(body);
      this.http.post('http://localhost:8000/dologin', body).subscribe(
        data => {
          const status = data['status'];
          const message = data['msg'];
          console.log(data);
          console.log(status);
          if (status === true) {
            this.location.replaceState('dashboard');
            console.log(status);
            window.location.reload(true);
          }

        }, (err: HttpErrorResponse) => {
          console.log(err.status);
          console.log(err.statusText);
          if (err.status === 401) {
            /*$.notify({
              icon: 'add_alert',
              message: '<b>' + 'Invalid Username/Password' + '</b>',
            }, {
              type: 'danger',
              timer: 3000,
              placement: {
                from: 'top',
                align: 'center'
              }
            });*/
          }
        }
      );

    }
  }

}
