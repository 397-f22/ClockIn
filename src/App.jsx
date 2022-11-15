import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <ReactAudioPlayer
        src="../audio/alarm.mp3"
        autoPlay
        controls
      /> */}
      <audio id="alarm" controls autoPlay={true}>
        <source src="../audio/alarm.mp3" type="audio/mp3" />
      </audio>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={ () => {let alarm = document.getElementById("alarm"); console.log(alarm); alarm.play()}}>
            count is: {count}
          </button>

        </p>
        <p>
          Edit <code>App.jsx</code> and save to test hot module replacement (HMR).
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
