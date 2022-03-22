export const openSidebarReducer = (state = false, action) => {
    switch (action.type) {
        case "OPEN_SIDEBAR":
            return !state;
        case "CLOSE_SIDEBAR":
            return state = false;
        default:
            return state;
    }
};
export const openSubmenuReducer = (state = false, action) => {
    switch (action.type) {
        case "OPEN_SUBMENU":
            return !state;
        case "CLOSE_SUBMENU":
            return state = false;
        default:
            return state;
    }
};