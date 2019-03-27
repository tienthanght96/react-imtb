import {
  CREATE_USER_REQUEST_TOKEN,
  CREATE_USER_REQUEST_TOKEN_PENDING,
  CREATE_USER_REQUEST_TOKEN_SUCCESS,
  CREATE_USER_REQUEST_TOKEN_ERRORED,
  USER_LOGIN_WITH_SESSION,
  USER_LOGIN_WITH_SESSION_PENDING,
  USER_LOGIN_WITH_SESSION_SUCCESS,
  USER_LOGIN_WITH_SESSION_ERRORED,
  USER_LOGOUT,
  USER_LOGOUT_PENDING,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_ERRORED
} from "./userConstants";

export function createUserRequestToken() {
  return {
    type: CREATE_USER_REQUEST_TOKEN
  };
}
export function createUserRequestTokenPending() {
  return {
    type: CREATE_USER_REQUEST_TOKEN_PENDING
  };
}
export function createUserRequestTokenSuccess() {
  return {
    type: CREATE_USER_REQUEST_TOKEN_SUCCESS
  };
}
export function createUserRequestTokenErrored() {
  return {
    type: CREATE_USER_REQUEST_TOKEN_ERRORED
  };
}
/* login action */
export function userLoginWithSession() {
  return {
    type: USER_LOGIN_WITH_SESSION
  };
}
export function userLoginWithSessionPending() {
  return {
    type: USER_LOGIN_WITH_SESSION_PENDING
  };
}
export function userLoginWithSessionSuccess(data: any) {
  return {
    type: USER_LOGIN_WITH_SESSION_SUCCESS,
    data,
  };
}
export function userLoginWithSessionErrored(data: any) {
  return {
    type: USER_LOGIN_WITH_SESSION_ERRORED,
    data
  };
}
/* logout session */
export function userLogout() {
  return {
    type: USER_LOGOUT
  };
}
export function userLogoutPending() {
  return {
    type: USER_LOGOUT_PENDING
  };
}
export function userLogoutSuccess() {
  return {
    type: USER_LOGOUT_SUCCESS
  };
}
export function userLogoutErrored() {
  return {
    type: USER_LOGOUT_ERRORED
  };
}
