import {RootState} from "./store";

export const selectAllEvents = (state: RootState) => Object.values(state.events.events);
export const selectEvent = (eventId: string) => (state: RootState) => state.events.events[eventId];