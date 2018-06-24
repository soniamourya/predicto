import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Location} from '@angular/common';

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
    alert('Submitted');
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
