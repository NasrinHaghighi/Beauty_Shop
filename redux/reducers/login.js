export const isLoginReducer = (state = false, action) => {
    switch (action.type) {
        case ('LOGIN'):
            return action.payload;
        case ('SIGNOUT'):
            return action.payload;
        default:
            return state;
    }
}
export const userAddressReducer = (state = [], action) => {
    switch (action.type) {
        case ('USER_ADDRESS'):
            return action.payload;
        default:
            return state;
    }
}