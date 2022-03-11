export const login = () => {
    return async(dispatch) => {
        return await dispatch({ type: "LOGIN", payload: true })

    }
}
export const signOut = () => {
    return async(dispatch) => {
        return await dispatch({ type: 'SIGNOUT', payload: false })
    }
}

export const userAddressHandler = (value) => {
    return async(dispatch, getState) => {
        const address = [...getState().userAddress, value]
        return await dispatch({ type: 'USER_ADDRESS', payload: address })
    }
}