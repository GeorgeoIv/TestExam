import type { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import type store from '../features/redux/store';

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;