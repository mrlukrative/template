import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { handleGetMessagesResponse } from '../helpers/helpers';

@Injectable()
export class MessagesService {
  constructor(private api: ApiService) { }

  getMessages(): Observable<any> {
    return this.api.get('/timeline/messages')
      .map(handleGetMessagesResponse);
  }
}
