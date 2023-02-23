import { combineReducers } from "redux";
import { projectReducer } from "./projects/project.reducer";

export const rootReducer = combineReducers({
    project: projectReducer,
});
