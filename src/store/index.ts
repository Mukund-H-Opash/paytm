import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import clickReducer from './clickSlice';
import upiReducer from './upiSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    click: clickReducer,
    upi: upiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;