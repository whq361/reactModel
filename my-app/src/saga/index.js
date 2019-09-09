import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function* fetchProject() {
//   yield delay(1000);
  yield put({ type: 'GET_PROJECT' })
}

export default function * rootSaga() {
  yield takeEvery('WATCH_GET_PROJECT', fetchProject);
}