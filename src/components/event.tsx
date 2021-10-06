import {EventModel, TimetableItemModel} from "../models/event.model";
import {useState} from "react";
import cn from "classnames"


export function Event({event}: {event: EventModel}) {
    return <div className="bg-leaf h-screen flex p-5 justify-center sm:p-2">
        <div className="text-left bg-white rounded w-full max-w-3xl bg-opacity-95 border-2 border-gray-700">
            <Title title={event.title}/>
            <DateOfEvent startDate={event.startDate} endDate={event.endDate}/>
            <Description description={event.description}/>
            <Timetable timetable={event.timetable}/>
        </div>
    </div>
}

const Title = (props: { title: string }) =>
    <h1 className="text-3xl p-2 pb-0 font-bold font-serif">{props.title}</h1>;

function DateOfEvent(props: { startDate: string, endDate: string }) {
    return <div className="text-right text-gray-500 pr-2 mb-2">
        <span>{props.startDate}</span>
        {props.endDate && <>
            &nbsp;-&nbsp;
            <span>{props.endDate}</span>
        </>}
    </div>;
}

function Description(props: { description: string }) {
    const [full, setFull] = useState(false);
    return <div className={cn("p-2 cursor-pointer border-b border-t", !full && "truncate w-full box-border")}
                onClick={() => setFull(f => !f)}>
        <span className="text-green-600 font-bold">Описание: </span>
        {props.description}
    </div>;
}

function Timetable(props: { timetable: TimetableItemModel[] }) {
    return <div className="p-2 border-b">
        <div className="text-green-600 font-bold">Рассписание:</div>
        {props.timetable.map(i =>
            <div>
                <span className="text-green-600 pr-1 ml-3">{i.time}</span>
                <span>{i.title}</span>
            </div>
        )}
    </div>;
}