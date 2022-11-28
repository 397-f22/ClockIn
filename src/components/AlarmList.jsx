import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState, useEffect, useRef } from "react";
import "./AlarmList.css";
import WordPuzzle from "./WordPuzzle";
import { alarmShouldRing } from "../utils/helpers";
import alarmRef from '../audio/alarm.mp3';
import { mockCurrentAlarmData } from "../utils/helpers";
import { useDbUpdate } from "../utils/firebase";

const AlarmList = ({ currentUser, alarms }) => {
  const uid = !currentUser ? "guest" : currentUser.uid;
  const [alarmList, setAlarmList] = useState(alarms.filter(alarm => alarm.uid === uid));

  const [nextAlarmId, setNextAlarmId] = useState(alarms.length);
  const [alarmRinging, setAlarmRinging] = useState(false);

  const [update, result] = useDbUpdate("alarms/0");
  useEffect(() => {
    const currentAlarmObj = mockCurrentAlarmData(currentUser);
    setAlarmList([currentAlarmObj, ...alarmList]);
    update(currentAlarmObj);
  }, [currentUser, nextAlarmId]);

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
    const uid = !currentUser ? "guest" : currentUser.uid;
    setAlarmList(alarms.filter(alarm => alarm.uid === uid));
  }, [currentUser, nextAlarmId]);

  return (
    <>
      <audio id="alarm" loop>
        <source src={alarmRef} type="audio/mp3" />
      </audio>

      <div className="alarm-list">
        <div className="headers">Set a New Alarm</div>
        <div className="set-alarm">
          <SetAlarm
            alarmList={alarmList}
            setAlarmList={setAlarmList}
            nextAlarmId={nextAlarmId}
            setNextAlarmId={setNextAlarmId}
            currentUser={currentUser}
          />
        </div>
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
                setAlarmList={setAlarmList}
              />))
          }
        </div>
        <hr className="alarm-puzzle-divider" />
        {
        alarmRinging
        && !puzzleSolveStatus
        && <WordPuzzle
            setPuzzleSolveStatus={setPuzzleSolveStatus}
            setAlarmRinging={setAlarmRinging}
          />
        }
      </div>
    </>
  );
};

export default AlarmList;
