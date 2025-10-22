import { type Action, type AnyAction } from "redux"
import type { State } from "./types"
import { HBC, SBC } from "../enums"

const initialValues = {
    sad: [],
    happy: []
}

export default function Reducer(
    currentState: State = initialValues,
    action: AnyAction
): State {

    switch (action.type) {
        case HBC: {
            return {
                ...currentState,
                happy: [...currentState.happy,
                {
                    intensity: action.payload.intensity,
                    at: action.payload.at
                }]
            }
        }
        case SBC: {
            return {
                ...currentState,
                sad: [...currentState.sad,
                {
                    intensity: action.payload.intensity,
                    at: action.payload.at
                }]
            }
        }
        default: {
            return {
                ...currentState
            }
        }
    }
}