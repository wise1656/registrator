export interface EventModel {
    id: string
    title: string
    description: string
    timetable: TimetableItemModel[]
    startDate: string
    endDate?: string
}

export interface TimetableItemModel {
    time: string
    title: string
}