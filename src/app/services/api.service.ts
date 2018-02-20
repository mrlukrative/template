import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';
import { getHeadersWithAuth, getJsonResponseData } from '../helpers/helpers';

@Injectable()
export class ApiService {
  constructor(private http: Http) { }

  authenticate(payload: any): Observable<Response> {
    const headers = new Headers({
      'Content-Type': 'application/vnd.api+json',
    });

    return this.http
      .post(`${environment.api}/authentication/tokens`, JSON.stringify(payload), { headers })
      .map(getJsonResponseData);
  }

  get(endpoint: string): Observable<Response> {
    return this.http
      .get(`${environment.api}${endpoint}`, { headers: getHeadersWithAuth() })
      .map(getJsonResponseData);
  }

  post(endpoint: string, payload: any): Observable<Response> {
    return this.http
      .post(`${environment.api}${endpoint}`, JSON.stringify(payload), { headers: getHeadersWithAuth() })
      .map(getJsonResponseData);
  }
}
