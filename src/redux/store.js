import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice"; 
import jobSlice from "./jobSlice";
import companySlice from "./companySlice"
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import applicationSlice from "./applicationSlice";

/*const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}*/

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["job"],
};


const rootReducer = combineReducers({
  auth: authSlice,
  job: jobSlice,
  company:companySlice,
  application:applicationSlice

})

// rename here to avoid conflict
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store
