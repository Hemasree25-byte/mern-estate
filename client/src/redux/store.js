import { combineReducers, configureStore } from '@reduxjs/toolkit'
import usereducer from './user/userSlice.js'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({user: usereducer})

const persistConfig = {
    key: 'root',
    storage,
    version:1,
}

const persisitedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persisitedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store);
