import { call, put, takeEvery } from "redux-saga/effects";
import { GetPhotoPayload, photoAction } from "../slice/photoSlice";
import { PayloadAction } from "@reduxjs/toolkit";
// import { GET_USER_FETCH, GET_USER_SUCCESS } from './actions';

async function photoFetch(start: number, limit: number) {
  return fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
  ).then((response) => response.json());
}

function* workerGetPhotos(action: PayloadAction<GetPhotoPayload>) {
  try {
    const { start, limit } = action.payload;
    console.log("payload", action.payload);
    const photos: {
      albumId: number;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    }[] = yield call(photoFetch, start, limit);
    yield put(photoAction.getPhotoSuccess({ photos }));
  } catch (err) {
    yield put(photoAction.getPhotoFail());
    console.error(err);
  }
}

function* photoSaga() {
  yield takeEvery(photoAction.getPhoto.type, workerGetPhotos);
}

export default photoSaga;
