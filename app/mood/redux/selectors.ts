import type { State } from "./types";

export const happyCountSelector = (state : State) => state.happy
export const sadCountSelector = (state : State) => state.sad