import {Injectable} from '@angular/core';
import {Indentity} from '../models/indentity';
import {Http, Headers} from '@angular/http';
import {Config} from '../config';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  static handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  constructor(private http: Http) {
  }

  login(user: Indentity) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(
      Config.apiUrl + '/authentication/tokens',
      JSON.stringify({
        attributes: {
          type: 'user',
          credentials: {
            username: user.userName,
            password: user.password
          }
        }
      }),
      {headers: headers}
    )
      .map(response => response.json())
      .do(res => {
        console.log('login data' + res.data.attributes.token);
        localStorage.setItem('sessionToken', res.data.attributes.token);
      })
      .catch(AuthenticationService.handleErrors);
  }
}
