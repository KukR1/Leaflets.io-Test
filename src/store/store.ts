import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import playerReducer from './playerSlice';
/** 
* Configure of the RTK store.
* @param {Object} players parameter  
* @return {Object} Returns reducer
*/
export const store = configureStore({
  reducer: {
    players: playerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;