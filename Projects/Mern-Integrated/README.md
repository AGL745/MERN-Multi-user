Front-End

MongoDB - NoSQL Database
Express - Backend Server 
React - Frontend Components
Node.js - JavaScript runtime environment 

This application will provide authentication, login, and a user model. 

Dependencies:

bcrypt: used to hash passwords 
body-parser: used to parse incoming request bodies in a middleware 
concurrently: allows backend and frontend to run concurrently on different ports
express: sits on top of Node to handle routing, requests, and response 
is-empty: a global function used with validator
jsonwebtoken: used for authorization 
mongoose: used to interact with MondoDB
passport: used to authenticate request, utilizes plugins called strategies
passport-jwt: a passport strategy that allows authenticating with a JSON Web Token (JWT): authenticates endpoints using a JWT
validator: Used to valid inputs (password, email format, etc.)

//Dev dependency 
-D flag
Nodemon: Refreshes site automatically on safe 

--React client based dependencies
axios: HTTP client that uses promises to make request to the the backend
classnames: provided conditional classes in JSX
jwt-decode: Used to decode jwt to retrieve user data
react-redux: All redux with react
react-router-dom: Enables routing
redux: Manages state between components
redux-thunk: Middleware that allows asynchronous calls and access to the dispatch methods
materialize: faster development component building 