import { fromJS, merge } from 'immutable';
import { Actions } from "../interfaces/Actions";
import { USER_LOGIN_WITH_SESSION_SUCCESS, USER_LOGIN_WITH_SESSION_PENDING, USER_LOGIN_WITH_SESSION_ERRORED } from './userConstants';
import { ErrorsResponse } from '../interfaces/ErrorsResponse';

const initialState = fromJS({
  expires_at: '',
  request_token: '',
  isRequestingLogin: false,
  errorLoginMessage: null,
  username: 'patricklagger',
  password: '31121995',
});

export default (state = initialState, action: Actions) => {
  switch (action.type) {

  case USER_LOGIN_WITH_SESSION_PENDING:
    return (
      merge(initialState, { isRequestingLogin: true })
    );
  case USER_LOGIN_WITH_SESSION_SUCCESS: {
    const { expires_at, request_token } = action.data;
    return (
      state
        .set('expires_at', expires_at)
        .set('request_token', request_token)
        .set('isRequestingLogin', false)
    );
  }
  case USER_LOGIN_WITH_SESSION_ERRORED: {
    const { status_message, status_code } = action.data as ErrorsResponse;
    return (
      state
        .set('isRequestingLogin', false)
        .set('errorLoginMessage', { status_message, status_code })
    );
  }

  default:
    return state
  }
}
