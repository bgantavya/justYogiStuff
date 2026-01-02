import { HBC, SBC } from "../enums"
import type { Moment, State } from "./types"

export const happyClicked = (count: number, time: Date) => ({
    type: HBC,
    payload: <Moment> {
        intensity: count,
        at: time
    }
})

export const sadClicked = (count: number, time: Date) => ({
    type: SBC,
    payload: <Moment> {
        intensity: count,
        at: time
    }
})
