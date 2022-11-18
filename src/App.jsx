import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import SetAlarm from './components/SetAlarm';
import AlarmList from './components/AlarmList';
import Header from './components/Header';
import WordPuzzle from './components/WordPuzzle';

const App = () => {

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
        <Header />
        <p>
          <button onClick={() => { let alarm = document.getElementById("alarm"); console.log(alarm); alarm.play() }}>
            ALARM
          </button>

        </p>
             </header>

      <AlarmList  />
      <WordPuzzle  />
    </div>
  );
};

export default App;
