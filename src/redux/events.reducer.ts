import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EventModel} from "../models/event.model";

export interface EventsState {
    events: {[id: string]: EventModel}
}

const initialState: EventsState = {
    events: {},
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
    }
})

export const { addEventsState, addEventState, updateEventState, deleteEventState } = eventSlice.actions

export default eventSlice.reducer