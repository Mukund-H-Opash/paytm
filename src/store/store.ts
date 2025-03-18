import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import clickReducer from './clickSlice';
import upiReducer from './upiSlice';
import searchReducer from './searchSlice';
import ticketReducer from './ticketSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// Middleware to persist ticket state to localStorage
const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem('ticketState', JSON.stringify(state.ticket));
  return result;
};

// Function to load initial state from localStorage
const loadState = () => {
  const serializedState = localStorage.getItem('ticketState');
  if (serializedState) {
    return JSON.parse(serializedState);
  }
  return undefined; // Fallback to initialState in ticketSlice
};

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    click: clickReducer,
    upi: upiReducer,
    search: searchReducer,
    ticket: ticketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(localStorageMiddleware),
  preloadedState: {
    ticket: loadState(), 
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;