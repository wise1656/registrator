import {RootState} from "./store";

export const selectCurrentEvent = (state: RootState) => state.events.events[state.events.currentEvent];