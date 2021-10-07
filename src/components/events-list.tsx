import {useSelector} from "react-redux";
import {selectAllEvents} from "../redux/events.selectors";
import {EventModel} from "../models/event.model";
import {DateOfEvent} from "./event";
import {Link} from "react-router-dom";

export function EventsList() {
    const events = useSelector(selectAllEvents);

    return <div className="bg-blue-200 h-screen flex justify-center items-top">
        <div className="bg-blue-50 max-w-3xl w-full p-3 rounded">
            {events.map(event =>
                <EventInList event={event}/>
            )}
        </div>
    </div>
}

function EventInList({event}: { event: EventModel }) {
    return <div className="bg-leaf rounded">
        <Link to={`/event/${event.id}`}>
            <div className="items-center p-2 bg-white bg-opacity-90 flex cursor-pointer justify-between rounded border border-gray-700">
                <div className="text-xl font-serif mr-2">{event.title}</div>
                <DateOfEvent startDate={event.startDate} endDate={event.endDate}/>
            </div>
        </Link>
    </div>
}
