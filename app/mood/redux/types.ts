export type Moment = {
    intensity: number
    at: Date
}

export type State = {
    sad: Moment[];
    happy: Moment[];
}