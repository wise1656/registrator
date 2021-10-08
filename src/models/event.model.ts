export interface EventModel {
    id: string
    title: string
    description: string
    timetable: TimetableItemModel[]
    startDate: string
    endDate?: string
    iamParticipate?: boolean
    iamEditor?: boolean
}

export interface TimetableItemModel {
    time: string
    title: string
}