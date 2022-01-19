import userTypes from "./user.type";


export const setCurrentUsre = user =>({
    type: userTypes.SET_CURRENT_USER,
    payload:user
})