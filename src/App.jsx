import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import SetAlarm from './components/SetAlarm';
import AlarmList from './components/AlarmList';

const App = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(
      () => setTime(new Date())
    ,1000)
  },[])

  const [alarmList, setAlarmList] = useState([]);

  const [alarmSelectedHour, setAlarmSelectedHour] = useState(0);
  const [alarmSelectedMinute, setAlarmSelectedMinute] = useState(0);

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

        <SetAlarm
          alarmList={alarmList}
          setAlarmList={setAlarmList}
        />

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

      <AlarmList alarmList={alarmList}/>
    </div>
  );
};

export default App;
