import { Action } from '@ngrx/store';

// MESSAGES
export const MESSAGES_FETCH_REQUEST = 'MESSAGES_FETCH_REQUEST';
export const MESSAGES_FETCH_SUCCESS = 'MESSAGES_FETCH_SUCCESS';
export const MESSAGES_FETCH_FAILURE = 'MESSAGES_FETCH_FAILURE';

// METRICS
export const METRICS_FETCH_REQUEST = 'METRICS_FETCH_REQUEST';
export const METRICS_FETCH_SUCCESS = 'METRICS_FETCH_SUCCESS';
export const METRICS_FETCH_FAILURE = 'METRICS_FETCH_FAILURE';

export class FetchMessagesRequest implements Action {
  readonly type = MESSAGES_FETCH_REQUEST;
}

export class FetchMessagesSuccess implements Action {
  readonly type = MESSAGES_FETCH_SUCCESS;
  constructor(public payload: any) {}
}

export class FetchMessagesFailure implements Action {
  readonly type = MESSAGES_FETCH_FAILURE;
}

export class FetchMetricsRequest implements Action {
  readonly type = METRICS_FETCH_REQUEST;
  constructor(public payload: any) {}
}

export class FetchMetricsSuccess implements Action {
  readonly type = METRICS_FETCH_SUCCESS;
  constructor(public payload: any) {}
}

export class FetchMetricsFailure implements Action {
  readonly type = METRICS_FETCH_FAILURE;
  constructor(public payload: any) {}
}
