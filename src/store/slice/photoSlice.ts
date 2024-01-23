// src/redux/reducers.ts
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface photoState {
  photos: {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }[];
  isLoading?: boolean;
}

const initialState: photoState = { photos: [], isLoading: false };

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    getPhoto: (state) => {
      state.isLoading = true;
    },
    getPhotoSuccess: (state, action: PayloadAction<photoState>) => {
      state.photos = action.payload.photos;
      state.isLoading = false;
    },
    getPhotoFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const photoAction = photoSlice.actions;
export const photoReducer = photoSlice.reducer;
