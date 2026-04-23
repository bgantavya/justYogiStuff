import { createStore, type Action } from "redux";
import Reducer from "./reducer";

// {state = 0}



const store = createStore(Reducer)
export default store