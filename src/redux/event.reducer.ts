import {createSlice} from "@reduxjs/toolkit";
import {EventModel} from "../models/event.model";

const initialState: EventModel = {
    id: null,
    title: '',
    description: '',
    startDate: 0,
    endData: 0
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {

    }
})

export const {} = eventSlice.actions

export default eventSlice.reducer