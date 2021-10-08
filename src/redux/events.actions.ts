import {EventModel} from "../models/event.model";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {updateEventDb} from "../firebase/event.db";
import {updateEventState} from "./events.reducer";


export const updateEvent = createAsyncThunk("event/updateEvent", async (event: EventModel, {dispatch}) => {
    await updateEventDb(event);
    dispatch(updateEventState(event));
})
