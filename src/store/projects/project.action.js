import { createAction } from "../../utils/reducer/reducer.utils";
import { PROJECT_ACTION_TYPES } from "./project.types";

export const setProjects = (projects) =>
    createAction(PROJECT_ACTION_TYPES.SET_PROJECTS, projects);
