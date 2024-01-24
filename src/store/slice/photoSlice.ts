// src/redux/reducers.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GetPhotoPayload {
  start: number;
  limit: number;
}
export interface photoState {
  photos: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[];
  isLoading?: boolean;
  error?: null | string;
}

const initialState: photoState = { photos: [], isLoading: false, error: null };

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    getPhoto: (state, action: PayloadAction<GetPhotoPayload>) => {
      state.isLoading = true;
      console.log(action.payload);
    },
    getPhotoSuccess: (state, action: PayloadAction<photoState>) => {
      state.photos = action.payload.photos;
      state.isLoading = false;
    },
    getPhotoFail: (state) => {
      state.isLoading = false;
      state.error = "Failed to fetch photos";
    },
  },
});

export const photoAction = photoSlice.actions;
export const photoReducer = photoSlice.reducer;
