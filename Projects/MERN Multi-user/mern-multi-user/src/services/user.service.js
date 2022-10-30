//Utilizes axios for HTTP request and Local Storage for user information and JWT
//This service allows accessing data 

import axios from "axios"
//Utilized authheader function to authorization to requests 

import authHeader from "./auth-header"

const API_URL = "http://localhost:8080/api/test/"

const getPublicContent = () => {
    return axios.get(API_URL + "all")
}

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() })
}

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() })
}

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() })
}

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
}