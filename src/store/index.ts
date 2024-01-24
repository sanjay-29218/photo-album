import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./slice";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: RootReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(sagaMiddleware, logger),
});
sagaMiddleware.run(rootSaga);
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
