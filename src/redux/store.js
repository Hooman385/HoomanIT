import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/slices/cartSlice"
import userReducer from "./features/slices/userSlice"
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
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
import { createStateSyncMiddleware, initStateWithPrevTab, initMessageListener } from 'redux-state-sync-per-instance';


const stateSyncConfig = {
    channel: 'my_broadcast_channel',
    blacklist: [PERSIST, PURGE],

};

const stateSyncMiddleware = [createStateSyncMiddleware(stateSyncConfig)];

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const storage = typeof window === "undefined" ? createNoopStorage() : createWebStorage("local");

const persistConfig = {
    key: 'root',
    storage: storage,
}


const persistedCartReducer = persistReducer(persistConfig, cartReducer)
// const persistedUserReducer = persistReducer(persistConfig, userReducer)


export const store = configureStore({
    reducer: {
        cart: persistedCartReducer,
        // user: persistedUserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(stateSyncMiddleware)

})

initMessageListener(store)
initStateWithPrevTab(store);



export const persistor = persistStore(store);


