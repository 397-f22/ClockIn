import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import SetAlarm from './components/SetAlarm';
import AlarmList from './components/AlarmList';
import Header from './components/Header';

const App = () => {

  return (
    <div>
      <Header />

      <AlarmList  />

      {/* <audio id="alarm" controls autoPlay={true}>
        <source src="../audio/alarm.mp3" type="audio/mp3" />
      </audio>

      <button onClick={() => { let alarm = document.getElementById("alarm"); console.log(alarm); alarm.play() }}>
        ALARM
      </button> */}
    </div>
  );
};

export default App;
