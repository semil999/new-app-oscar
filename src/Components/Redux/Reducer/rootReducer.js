import { combineReducers } from "redux";
import { countReducer } from "./countReduer";
import { crudReducer } from "./crudReducer";
import { apiCrudReducer } from "./apiCrudReducer";

export const rootReducer = combineReducers({
    count: countReducer,
    ary: crudReducer,
    student: apiCrudReducer
})