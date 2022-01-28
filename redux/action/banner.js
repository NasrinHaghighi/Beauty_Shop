export const handelOpenSidebar = () => {
    return async dispatch => {
        await dispatch({ type: "OPEN_SIDEBAR" });
    };
};
export const handelCloseSidebar = () => {
    return async dispatch => {
        await dispatch({ type: "CLOSE_SIDEBAR" }, dispatch({ type: "CLOSE_SUBMENU" }));
    };
};
export const handelOpenSubmenu = () => {
    return async dispatch => {
        await dispatch({ type: "OPEN_SUBMENU" });
    };
};
export const handelcloseSubmenu = () => {
    return async dispatch => {
        await dispatch({ type: "CLOSE_SUBMENU" });
    };
};