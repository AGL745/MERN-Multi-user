import axios from "axios"


//Authorization token

const setAuthToken = token => {
  if (token) {

    // Add authorization token to every request for logged in user

    axios.defaults.headers.common["Authorization"] = token

  } else {

    // Delete auth header
    delete axios.defaults.headers.common["Authorization"]

  }
  
}

export default setAuthToken