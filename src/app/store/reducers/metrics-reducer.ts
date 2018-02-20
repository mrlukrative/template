import { METRICS_FETCH_FAILURE, METRICS_FETCH_SUCCESS } from '../actions/actions';

export interface Metric {
  id: number;
}

export interface MetricsState { [key: string]: Metric; }

export const INITIAL_METRICS_STATE: MetricsState = {};
export function metrics(state = INITIAL_METRICS_STATE, action): MetricsState {
  switch (action.type) {
    case METRICS_FETCH_SUCCESS: return { ...state, ...action.payload };
    case METRICS_FETCH_FAILURE: return state;

    default: return state;
  }
}
