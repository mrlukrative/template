import { MESSAGES_FETCH_FAILURE, MESSAGES_FETCH_SUCCESS } from '../actions/actions';

export interface Message {
  id: number;
}

export interface MessagesState extends Array<Message> {
  [index: number]: Message;
}

export const INITIAL_MESSAGES_STATE: MessagesState = [];
export function messages(state = INITIAL_MESSAGES_STATE, action): MessagesState {
  switch (action.type) {
    case MESSAGES_FETCH_SUCCESS: return [ ...state, ...action.payload ];
    case MESSAGES_FETCH_FAILURE: return state;

    default: return state;
  }
}
