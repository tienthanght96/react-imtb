import { all } from 'redux-saga/effects';
import { userSaga } from '../user/userSaga';
export function* appSaga() {
  yield all([
    userSaga()
  ]);
}
