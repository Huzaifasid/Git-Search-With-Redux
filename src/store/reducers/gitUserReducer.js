const Initial_State = {
    userData: {},
    userDataLoading: false,
    userDataError: "",
}



const gitUserReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case 'GET_PROFILE_LOADING':
            return {
                ...state,
                userDataLoading: true,
            }
        case 'GET_PROFILE':
            return {
                ...state,
                userData: action.payload,
                userDataLoading: false,
                userDataError: "",
            }
        case 'GET_PROFILE_ERROR':
            return {
                ...state,
                userDataLoading: false,
                userDataError: action.payload,
                userData: {},
            }
            default : return state
    }
 
}
export { gitUserReducer }