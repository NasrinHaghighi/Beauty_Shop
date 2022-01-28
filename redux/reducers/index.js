import { combineReducers } from "redux";
import { openSidebarReducer } from "./banner";
import { openSubmenuReducer } from "./banner";



export const reducers = combineReducers({
    sidebarIsOpen: openSidebarReducer,
    submenu: openSubmenuReducer,
});