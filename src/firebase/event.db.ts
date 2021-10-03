import {onSnapshot, collection, getFirestore} from "firebase/firestore";
import {addEventsState, addEventState, updateEventState} from "../redux/events.reducer";
import {globalStore} from "../redux/store";
import {EventModel} from "../models/event.model";

let isFirstTimeEvents = true;

export function watchForEvents() {
    const db = getFirestore();
    onSnapshot(collection(db, "events"), events => {
        if (isFirstTimeEvents) {
            initialLoadEvents(events.docs.map(d => toEventModel(d)));
            isFirstTimeEvents = false;
            return;
        }

        events.docChanges().forEach((change) => {
            if (change.type === "added") {
                globalStore.dispatch(addEventState(toEventModel(change.doc))); }
            if (change.type === "modified") {
                globalStore.dispatch(updateEventState(toEventModel(change.doc)));
            }
            if (change.type === "removed") {
                console.log("removed: ", change.doc.data());
            }
        });
    })
}

function initialLoadEvents(events) {
    globalStore.dispatch(addEventsState(events));
}


export function addNewEvent() {
    // todo
}

export function updateEvent(event) {

}

function toEventModel(firebaseDoc):EventModel {
    return {...firebaseDoc.data(), id: firebaseDoc.id};
}