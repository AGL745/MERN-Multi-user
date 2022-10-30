import logo from './logo.svg';
import './App.css';

//Utilize bootstrap library for quick views
import "bootstrap/dist/css/bootstrap.min.css"


//Utilized an arrow function 
const App = () => {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn and become an amazing software engineer
        </a>
      </header>
    </div>
  );
}

export default App;
