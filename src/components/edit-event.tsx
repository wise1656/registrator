import {EventModel, TimetableItemModel} from "../models/event.model";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {ButtonPrimary, ButtonSecondary} from "./button";
import {updateEvent} from "../redux/events.actions";



export function EditEvent({event, onClose}: {event: EventModel, onClose: () => void}) {
    const [updatedEvent, setUpdatedEvent] = useState({...event, timetable: TimetableToText(event.timetable)});
    const dispatch = useDispatch();

    function save() {
        onClose();
        dispatch(updateEvent({...updatedEvent, timetable: TextToTimetable(updatedEvent.timetable)}));
    }

    return <div className="p-3">
        <EditField label="Заголовок" value={updatedEvent.title}
                   onChange={val => setUpdatedEvent(e => ({...e, title: val}))}/>
        <EditField label="Описание" area value={updatedEvent.description}
                   onChange={val => setUpdatedEvent(e => ({...e, description: val}))}/>
        <EditField label="Расписание" area value={updatedEvent.timetable}
                   onChange={val => setUpdatedEvent(e => ({...e, timetable: val}))}/>
        <EditField label="Дата начала" value={updatedEvent.startDate}
                   onChange={val => setUpdatedEvent(e => ({...e, startDate: val}))}/>
        <EditField label="Дата окончания" value={updatedEvent.endDate}
                   onChange={val => setUpdatedEvent(e => ({...e, endDate: val}))}/>
        <div className="flex mt-3 justify-end">
            <ButtonPrimary className="mr-2" onClick={save}>Сохранить</ButtonPrimary>
            <ButtonSecondary  onClick={onClose}>Отмена</ButtonSecondary>
        </div>
    </div>
}

function EditField(props) {
    const {label, value, onChange, area} = props;
    return <div className="flex mb-1">
        <span className="w-44">{label}</span>
        {area
            ? <textarea className="p-1 flex-1 border h-48" value={value as string} onChange={e => onChange(e.target.value)}/>
            : <input className="p-1 flex-1 border" value={value as string} onChange={e => onChange(e.target.value)}/>
        }
    </div>;
}

function TimetableToText(timetable: TimetableItemModel[]): string {
    return timetable.map(t => `${t.time} ${t.title}`).join('\n');
}

function TextToTimetable(text: string): TimetableItemModel[] {
    return text.split('\n').map(s => {
        const [first, ...other] = s.split(' ');
        return {time: first, title: other.join(' ')};
    })
}
