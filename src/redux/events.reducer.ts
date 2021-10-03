import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EventModel} from "../models/event.model";

export interface EventsState {
    events: {[id: string]: EventModel}
    currentEvent: string
}

const initialState: EventsState = {
    events: {},
    currentEvent: null
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEventsState: (state, {payload}: PayloadAction<EventModel[]>) => {
            state.events = Object.fromEntries(payload.map(e => ([e.id, e])));
        },
        addEventState: (state, {payload}: PayloadAction<EventModel>) => {
            state.events[payload.id] = payload;
        },
        updateEventState: (state, {payload}: PayloadAction<EventModel>) => {
            state.events[payload.id] = payload;
        },
        deleteEventState: (state, {payload}: PayloadAction<string>) => {
            delete state.events[payload];
        },
        openEvent: (state, {payload}: PayloadAction<string>) => {
            state.currentEvent = payload;
        },
        closeEvent: (state) => {
            state.currentEvent = null;
        },
    }
})

export const { addEventsState, addEventState, updateEventState, deleteEventState, openEvent, closeEvent } = eventSlice.actions

export default eventSlice.reducer