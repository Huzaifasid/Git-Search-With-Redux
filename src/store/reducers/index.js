import { combineReducers } from "redux";
import { gitUserReducer } from "./gitUserReducer";


const rootReducers = combineReducers(
    {
        gitUserReducer,
    }
)
export default rootReducers