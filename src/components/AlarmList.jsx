import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState, useEffect, useRef } from "react";
import "./AlarmList.css";
import WordPuzzle from "./WordPuzzle";
import { alarmShouldRing } from "../utils/helpers";
import alarmRef from '../audio/alarm.mp3';
import { useDbUpdate } from "../utils/firebase";
import MathPuzzle from "./MathPuzzle"
import PuzzleModeSlider from "./PuzzleModeSlider";

const AlarmList = ({ currentUser, alarms, testing }) => {
  const uid = currentUser.uid;
  const [alarmList, setAlarmList] = useState(alarms.filter(alarm => alarm.uid === uid));
  const [nextAlarmId, setNextAlarmId] = useState(alarms.length);
  const [alarmRinging, setAlarmRinging] = useState(false);
  const [puzzleMode, setPuzzleMode] = useState(currentUser.puzzle_mode);
  const [update, result] = useDbUpdate(`users/${uid}`);

  const sortAlarms = (alarms) => {
    setAlarmList(alarms.sort((a, b) => {
      return a.hour === b.hour ? a.minute - b.minute : a.hour - b.hour
    }))
  }

  const changePuzzleMode = () => {

    if (alarmRinging) {
      alert("Please solve puzzle to change puzzle mode!");
      return;
    } else {
      setPuzzleMode(puzzleMode === "word" ? "math" : "word")
      if (!testing) {
        update({
          "puzzle_mode": puzzleMode === "word" ? "math" : "word"
        })
      }
    }
  }
  // https://stackoverflow.com/questions/64707231/updated-state-value-is-not-reflected-inside-setinterval-in-react
  const timer = useRef(null);

  useEffect(() => {
    const updateAlarm = () => {
      timer.current = setInterval(
        () => {
          const alarm = document.getElementById("alarm");

            if (alarmList.some(alarm => alarmShouldRing(alarm))) {
              alarm.play();
              setAlarmRinging(true);
            }

        }, 1000);
    };

    updateAlarm();
    return () => clearInterval(timer.current);
  }, [alarmList]);

  useEffect(() => {
    const uid = currentUser.uid;
    sortAlarms(alarms.filter(alarm => alarm.uid === uid));
  }, [currentUser, nextAlarmId]);


  return (
    <>
      <audio id="alarm" data-testid="alarm" loop>
        <source src={alarmRef} type="audio/mp3" />
      </audio>
      <PuzzleModeSlider currentUser={currentUser} changePuzzleMode={changePuzzleMode} puzzleMode={puzzleMode} />
      <div className="alarm-list">
        <div className="headers">Set a New Alarm</div>
        <div className="set-alarm">
          <SetAlarm
            testing={testing}
            alarmList={alarmList}
            setAlarmList={sortAlarms}
            nextAlarmId={nextAlarmId}
            setNextAlarmId={setNextAlarmId}
            currentUser={currentUser}
          />
        </div>
        {currentUser.uid !== "guest" &&
          <>
            <div className="headers">Current Alarms</div>
            <div className="alarm-list-body">
              {
                alarmList.map((alarm, id) => (
                  <Alarm
                    key={id}
                    currentUser={currentUser}
                    alarmIdList={id}
                    alarmIdDb={alarm.alarm_id}
                    alarm={alarm}
                    alarmList={alarmList}
                    setAlarmList={sortAlarms}
                  />))
              }
            </div>
          </>
        }
        <hr className="alarm-puzzle-divider" />
        {alarmRinging
          &&
          (puzzleMode === "word" ?

            <WordPuzzle
              setAlarmRinging={setAlarmRinging}
              // testing={testing}
            />
            :
            <MathPuzzle
              setAlarmRinging={setAlarmRinging}
              // testing={testing}
            />

          )
        }
      </div>
      {
        testing &&
        <div data-testid="puzzleMode">{puzzleMode}</div>
      }
      {
        testing &&
        <div data-testid="ringing">{alarmRinging.toString()}</div>
      }
    </>
  );
};

export default AlarmList;
