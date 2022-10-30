//Utilizes axios for HTTP request and Local Storage for user information and JWT
//Allows protected resource retrieval, request requires authorization header


//Helper function checks local storage for accessToken return Token if present
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user && user.accessToken) {
        return { Authorization: 'Bearer: ' + user.accessToken}
    } else {
        return {}
    }
}