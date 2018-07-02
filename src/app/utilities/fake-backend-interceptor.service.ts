import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class FakeBackendInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];

    // wrap in delayed observable to simulate server api call
    // noinspection TsLint
    return Observable.of(null).mergeMap(() => {


      // login
      if (request.url.endsWith('http://localhost:8000/dologin') && request.method === 'POST') {
        // find if any user matches login credentials
        // alert('Login request intercepted1');
        const body = {
          status: true,
          msg: 'login'
        };
        return Observable.of(new HttpResponse({body: body}));
      }


      // pass through any requests not handled above
      return next.handle(request);
    });
  }

}

export let fakeBackendInterceptorService = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptorService,
  multi: true
};
