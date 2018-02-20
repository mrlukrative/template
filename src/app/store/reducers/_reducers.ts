import { INITIAL_UI_STATE, ui, UiState } from './ui-reducer';
import { INITIAL_MESSAGES_STATE, messages, MessagesState } from './messages-reducer';
import { INITIAL_METRICS_STATE, metrics, MetricsState } from './metrics-reducer';

export interface ApplicationState {
  ui: UiState;
  messages: MessagesState;
  metrics: MetricsState;
}

export const initialState: ApplicationState = {
  ui: INITIAL_UI_STATE,
  messages: INITIAL_MESSAGES_STATE,
  metrics: INITIAL_METRICS_STATE,
};

export const reducers = {
  ui,
  messages,
  metrics,
};
