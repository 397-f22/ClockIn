import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState, useEffect, useRef } from "react";
import "./AlarmList.css";
import { mockAlarmList } from "../utils/mockAlarmList";
import WordPuzzle from "./WordPuzzle";
import { alarmShouldRing } from "../utils/helpers";

const AlarmList = () => {
    const [alarmList, setAlarmList] = useState(mockAlarmList);
    const [puzzleSolveStatus, setPuzzleSolveStatus] = useState(false);
    const timer = useRef(null);

    // https://stackoverflow.com/questions/64707231/updated-state-value-is-not-reflected-inside-setinterval-in-react
    useEffect(() => {
      const updateAlarm = () => {
        timer.current = setInterval(
          () => {
            const alarm = document.getElementById("alarm");

            if (alarmList.every(alarm => !alarmShouldRing(alarm))) {
              alarm.pause();
              console.log("pause");
              alarm.mute = true;
            }
        }, 1000);
      };

      updateAlarm();
      return () => clearInterval(timer.current);
    }, [alarmList]);

    return (
      <>
        <audio id="alarm">
          <source src="../../audio/alarm.mp3" type="audio/mp3" />
        </audio>

        <div className="alarm-list">
            <div className="headers">Set a New Alarm</div>
            <div className="set-alarm">
              <SetAlarm
                alarmList={alarmList}
                setAlarmList={setAlarmList}
              />
            </div>
            <div className="headers">Current Alarms</div>
            <div className="alarm-list-body">
                {
                  alarmList.map((alarm, id) => (
                    <Alarm
                      key={id}
                      alarmId={id}
                      alarm={alarm}
                      alarmList={alarmList}
                      setAlarmList={setAlarmList}
                      puzzleSolveStatus={puzzleSolveStatus}
                      setPuzzleSolveStatus={setPuzzleSolveStatus}
                    />))
                }
            </div>
            <hr className="alarm-puzzle-divider"/>
            <WordPuzzle setPuzzleSolveStatus={setPuzzleSolveStatus} />
        </div>
      </>
    )
};

export default AlarmList;
