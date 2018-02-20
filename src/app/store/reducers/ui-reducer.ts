import { Action } from '@ngrx/store';
import { MESSAGES_FETCH_REQUEST, METRICS_FETCH_SUCCESS } from '../actions/actions';

export interface UiState {
  userId?: number;
  timelineId?: number;
  loading: boolean;
}

export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  timelineId: undefined,
  loading: false,
};

export function ui(state: UiState = INITIAL_UI_STATE, action: Action): UiState {
  // let newState;

  switch (action.type) {
    // newState = Object.assign({}, state); || newState = _.merge({}, state, { loading: true }};
    // newState.loading = true;
    // return newState;
    case MESSAGES_FETCH_REQUEST:
      return { ...state, loading: true };

    // newState = Object.assign({}, state);
    // newState.loading = false;
    case METRICS_FETCH_SUCCESS:
      return { ...state, loading: false };

    default:
      return state;
  }
}
