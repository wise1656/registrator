import {EventModel, TimetableItemModel} from "../models/event.model";
import {useState} from "react";
import cn from "classnames"
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect, useParams} from "react-router-dom";
import {selectEvent} from "../redux/events.selectors";
import {EditEvent} from "./edit-event";
import {ButtonPrimary, ButtonSecondary} from "./button";
import {addMeAsParticipate} from "../redux/events.reducer";


export function Event() {
    const { id } = useParams<{id: string}>();
    const event = useSelector(selectEvent(id));
    const [edit, setEdit] = useState(false);

    if (!event)
        return <Redirect to="/"/>;

    return <div className="bg-leaf h-screen flex p-5 justify-center sm:p-2">
        <div className="text-left bg-white rounded w-full max-w-3xl bg-opacity-95 border-2 border-gray-700">
            {edit
                ? <EditEvent event={event} onClose={() => setEdit(false)}/>
                : <ObserveEvent event={event} onClick={() => setEdit(true)}/>}
        </div>
    </div>
}

function ObserveEvent(props: { event: EventModel, onClick: () => void }) {
    return <>
        <div className="flex">
            <Link className="text-3xl m-2 cursor-pointer font-bold text-green-600" to="/">&lt;</Link>
            <Title title={props.event.title}/>
            {//props.event.iamEditor &&
                <div className="text-gray-400 text-sm mt-2 ml-2 cursor-pointer" onClick={props.onClick}>редактировать</div>
            }
        </div>
        <DateOfEvent className="mb-2" startDate={props.event.startDate} endDate={props.event.endDate}/>
        <Description description={props.event.description}/>
        <Timetable timetable={props.event.timetable}/>
        <Participate event={props.event}/>
    </>;
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
        {props.timetable.map((t, i) =>
            <div key={i}>
                <span className="text-green-600 pr-1 ml-3">{t.time}</span>
                <span>{t.title}</span>
            </div>
        )}
    </div>;
}

function Participate(props: {event: EventModel}) {
    const dispatch = useDispatch();
    const takePart = be => dispatch(addMeAsParticipate({eventId: props.event.id, takePart: be}));

    return <div className="m-2 flex items-center">
        {props.event.iamParticipate
            ? <>
                <span className="mr-3 font-bold">Я участвую</span>
                <ButtonSecondary onClick={() => takePart(false)}>Отменить участие</ButtonSecondary>
            </>
            : <ButtonPrimary onClick={() => takePart(true)}>Буду участвовать</ButtonPrimary>
        }
    </div>;
}
