import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { FetchMessagesSuccess, MESSAGES_FETCH_REQUEST } from '../actions/actions';
import { MessagesService } from '../../services/messages.service';

@Injectable()
export class MessagesEffectService {
  @Effect() messages$: Observable<Action> = this.actions$
    .ofType(MESSAGES_FETCH_REQUEST)
    .switchMap(() => this.messagesService.getMessages())
    .map(messages => new FetchMessagesSuccess(messages));

  constructor(private actions$: Actions, private messagesService: MessagesService) { }
}
