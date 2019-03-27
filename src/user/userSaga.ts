import { call, put, all, takeLatest } from 'redux-saga/effects';
import { AuthenticationApiServices } from '../api/authentication';
import { userLoginWithSessionPending, userLoginWithSessionSuccess, userLoginWithSessionErrored } from './userActions';
import { USER_LOGIN_WITH_SESSION } from './userConstants';
import { saveToLocalStorage } from '../utils/localStorage';
import { getErrorResponse } from '../utils/errorResponseHandler';

function* userLoginWithSessionSaga() {
  try {
    const responseToken  = yield call(AuthenticationApiServices.requestNewToken);
    yield put(userLoginWithSessionPending());
    if(responseToken) {
      // const { request_token } = responseToken;
      const responseLogin  = yield call(AuthenticationApiServices.userLogin, 'asdasdasd');
      if(responseLogin && responseLogin.status) {
        const { expires_at, request_token } = responseLogin;
        saveToLocalStorage('expires_at', new Date(expires_at).getTime().toString());
        saveToLocalStorage('request_token', request_token);
        yield put(userLoginWithSessionSuccess({ expires_at, request_token }));
      }
    }

  } catch (error) {
    console.log(error);
    const errorResponse = getErrorResponse(error);
    yield put(userLoginWithSessionErrored(errorResponse));
  }
}
function* watchLoginWithSession() {
  yield takeLatest(USER_LOGIN_WITH_SESSION, userLoginWithSessionSaga);
}

export function* userSaga() {
  yield all([
    watchLoginWithSession()
  ]);
}