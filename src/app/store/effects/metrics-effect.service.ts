import {
  FetchMessagesSuccess,
  FetchMetricsRequest,
  FetchMetricsSuccess,
  MESSAGES_FETCH_SUCCESS,
  METRICS_FETCH_REQUEST
} from '../actions/actions';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MetricsService } from '../../services/metrics.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { getMetricsPayloadFromMessages } from '../../helpers/helpers';

@Injectable()
export class MetricsEffectService {
  @Effect() messagesToMetricsChain$: Observable<Action> = this.actions$
    .ofType(MESSAGES_FETCH_SUCCESS)
    .map((action: FetchMessagesSuccess) => action.payload)
    .map(getMetricsPayloadFromMessages)
    .switchMap(payload => Observable.of(new FetchMetricsRequest(payload)));

  @Effect() metrics$: Observable<Action> = this.actions$
    .ofType(METRICS_FETCH_REQUEST)
    .map((action: FetchMetricsRequest) => action.payload)
    .switchMap(payload => this.metricsService.getMetrics(payload))
    .map(response => new FetchMetricsSuccess(response));

  constructor(private actions$: Actions, private metricsService: MetricsService) {}
}
