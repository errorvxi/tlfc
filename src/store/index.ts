import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import userReducer from './modules/user'
import docInfoReducer from './modules/document-info'

const store = configureStore({
  reducer: {
    user: userReducer,
    docInfo: docInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => any = useDispatch

export default store
