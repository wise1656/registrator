import {configureStore} from "@reduxjs/toolkit";
import eventReducer from "./event.reducer";

export const globalStore = configureStore({
    reducer: {
        event: eventReducer
    }
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch