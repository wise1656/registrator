import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "./events.reducer";

export const globalStore = configureStore({
    reducer: {
        events: eventReducer
    },
    devTools: true
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch