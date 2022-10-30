//This action creator is related to authentication. 

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,

} from "./types"

//Import AuthService to make asynchronous HTTP request this is trigger one or more dispatch 


import AuthService from "../services/auth.service"

//register() calls AuthService.register(username, email, password)
//Dispatch appropriate message depending success or failure

export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password)
        .then((response) => {
        dispatch({
            type: REGISTER_SUCCESS
        })

        dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
        })

        return Promise.resolve()
    },
        (error) => {
            const message =
                (error.response && 
                    error.response.data &&
                    error.response.data.message) || error.message ||
                    error.toString()

                    dispatch({
                        type: REGISTER_FAIL,
                    })

                    dispatch({
                        type: SET_MESSAGE,
                        payload: message,
                    })

                    return Promise.reject
        }
    )
}

// Login calls authentication service, sending username and password, and responds according to success or failure

export const login = (username, password) => (dispatch) => {
    return AuthService.register(username, password)
        .then((data) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {user: data }
        })

        return Promise.resolve()
    },
        (error) => {
            const message =
                (error.response && 
                    error.response.data &&
                    error.response.data.message) || error.message ||
                    error.toString()

                    dispatch({
                        type: LOGIN_FAIL,
                    })

                    dispatch({
                        type: SET_MESSAGE,
                        payload: message,
                    })

                    return Promise.reject
        }
    )
}

export const logout = () => (dispatch) => {
    AuthService.logout()

    dispatch ({
        type: LOGOUT
    })
}