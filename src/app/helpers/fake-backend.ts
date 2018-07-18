import {Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {

  /*This token is admin true*/
      let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVtYW5nIiwiYWRtaW4iOnRydWV9._yNcJIi82yZ84b1Swsc9qYCV7KigQr-IIP1oKaMN2hg';

  /*This token is admin false*/
    //let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InVtYW5nIiwiYWRtaW4iOmZhbHNlfQ.QGbXIfVM6QYL5nN2JN_WaWo23u5XgExu0PpPbuKYekw'

  backend.connections.subscribe((connection: MockConnection) => {
    // We are using the setTimeout() function to simulate an asynchronous call
    // to the server that takes 1 second.
    setTimeout(() => {
      //
      // Fake implementation of /api/authenticate
      //
      if (connection.request.url.endsWith('/api/authenticate') &&
        connection.request.method === RequestMethod.Post) {
        let body = JSON.parse(connection.request.getBody());

        if (body.email === 'admin' && body.password === 'a') {
          connection.mockRespond(new Response(
            new ResponseOptions({
              status: 200,
              body: {token: token}
            })
          ));
        } else {
          connection.mockRespond(new Response(
            new ResponseOptions({status: 200})
          ));
        }
      }


    }, 1000);
  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions]
};
