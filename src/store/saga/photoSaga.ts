import { call, put, takeEvery } from "redux-saga/effects";
import { photoAction, photoState } from "../slice/photoSlice";
// import { GET_USER_FETCH, GET_USER_SUCCESS } from './actions';

async function photoFetch() {
  return fetch(
    "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"
  ).then((response) => response.json());
}

function* workerGetPhotos() {
  console.log("++++++++++++");
  try {
    const photos: {
      albumId: number;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    }[] = yield call(photoFetch);
    yield put(photoAction.getPhotoSuccess({ photos }));
  } catch (err) {
    yield put(photoAction.getPhotoFail());
    console.error(err);
  }
}

function* photoSaga() {
  yield takeEvery(photoAction.getPhoto, workerGetPhotos);
}

export default photoSaga;
