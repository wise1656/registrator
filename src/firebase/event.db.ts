import {onSnapshot, collection, getFirestore} from "firebase/firestore";

let isFirstTimeEvents = true;

export function watchForEvents() {
    const db = getFirestore();
    onSnapshot(collection(db, "events"), events => {
        if (isFirstTimeEvents) {
            isFirstTimeEvents = false;
            return;
        }

        events.docChanges().forEach((change) => {
            if (change.type === "added") {
                console.log("added: ", change.doc.data());
            }
            if (change.type === "modified") {
                console.log("modified: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("removed: ", change.doc.data());
            }
        });
    })
}

function initialLoadEvents(events) {
    // todo: save event to redux
}


export function addNewEvent() {
    // todo
}

export function updateEvent(event) {

}