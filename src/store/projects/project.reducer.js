import { PROJECT_ACTION_TYPES } from "./project.types";

const PROJECTS_INITIAL_STATE = [];

export const projectReducer = (state = PROJECTS_INITIAL_STATE, action) => {
    const [type, payload] = action;
    switch (type) {
        case PROJECT_ACTION_TYPES.SET_PROJECTS:
        case PROJECT_ACTION_TYPES.ADD_NEW_PROJECT:
        case PROJECT_ACTION_TYPES.SET_CURRENT_PROJECT:
            return { ...state, projects: payload };

        default:
            return state;
    }
};
