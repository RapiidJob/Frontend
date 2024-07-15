import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from '../features/auth/authSlice'
import jobsReducer from '../features/jobs/jobSlice'
import jobDetailReducer from '../features/jobs/jobDetailSlice'
const persistConfig = {
  key: 'root',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)
const persistedJobsReducer = persistReducer(persistConfig, jobsReducer)

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    jobs: persistedJobsReducer,
    jobDetail: jobDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store)

export { store, persistor }
