import axios from "axios";

export const apiGet = (user) => {
    // console.log(user);
    return (dispatch) => {
        dispatch({
            type: 'GET_PROFILE_LOADING'
        })
        const searchValue = user ? user : "example";
        axios.get(`https://api.github.com/users/${searchValue}`)
            .then((response) => dispatch({
                type: 'GET_PROFILE',
                payload: response.data
            }))
            .catch((error) => dispatch({
                type: 'GET_PROFILE_ERROR',
                payload: error.message
            }))

    }
}