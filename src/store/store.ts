import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import clickReducer from './clickSlice';
import upiReducer from './upiSlice';
import searchReducer from './searchSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    click: clickReducer,
    upi: upiReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;