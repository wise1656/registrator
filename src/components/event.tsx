import {TimetableItemModel} from "../models/event.model";
import {useState} from "react";
import cn from "classnames"
import {useSelector} from "react-redux";
import {Link, Redirect, useParams} from "react-router-dom";
import {selectEvent} from "../redux/events.selectors";


export function Event() {
    const { id } = useParams<{id: string}>();
    const event = useSelector(selectEvent(id))

    if (!event)
        return <Redirect to="/"/>;

    return <div className="bg-leaf h-screen flex p-5 justify-center sm:p-2">
        <div className="text-left bg-white rounded w-full max-w-3xl bg-opacity-95 border-2 border-gray-700">
            <div className="flex">
                <Link className="text-3xl m-2 cursor-pointer font-bold text-green-600" to="/">&lt;</Link>
                <Title title={event.title}/>
            </div>
            <DateOfEvent className="mb-2" startDate={event.startDate} endDate={event.endDate}/>
            <Description description={event.description}/>
            <Timetable timetable={event.timetable}/>
        </div>
    </div>
}

const Title = (props: { title: string }) =>
    <h1 className="text-3xl p-2 pb-0 font-bold font-serif">{props.title}</h1>;

export function DateOfEvent(props: { startDate: string, endDate: string, className?: string }) {
    return <div className={cn("text-right text-gray-500 pr-2", props.className)}>
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