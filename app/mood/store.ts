import { createStore, type Action } from "redux";

// {state = 0}
export type State = {
    sadCount : number;
    happyCount : number;
}
const initialValues = {
    sadCount: 0,
    happyCount: 0
}
function reducer(currentState: State = initialValues, action: Action ): State {
    if(action.type == "happy button clicked") return {...currentState, happyCount: currentState.happyCount + 1}
    else if(action.type == "sad button clicked") return {...currentState, sadCount: currentState.sadCount + 1}
    else return currentState

}

const store = createStore(reducer)
export default store