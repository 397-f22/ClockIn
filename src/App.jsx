import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval( 
      () => setTime(new Date())
    ,1000)
  },[])
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
        <h1>{time.toLocaleTimeString()}</h1>
        <p>
          <button onClick={ () => {let alarm = document.getElementById("alarm"); console.log(alarm); alarm.play()}}>
            ALARM
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
