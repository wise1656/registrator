import {onSnapshot, collection, getFirestore, updateDoc, doc} from "firebase/firestore";
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


export function addNewEventDb() {
    // todo
}

export async function updateEventDb(event: EventModel) {
    const db = getFirestore();
    await updateDoc(doc(db, 'events', event.id), {
        title: event.title,
        description: event.description,
        timetable: event.timetable,
        startDate: event.startDate,
        endDate: event.endDate
    })
}

function toEventModel(firebaseDoc):EventModel {
    return {...firebaseDoc.data(), id: firebaseDoc.id};
}