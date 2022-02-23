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