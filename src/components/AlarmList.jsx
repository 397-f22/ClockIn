import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState, useEffect, useRef } from "react";
import "./AlarmList.css";
import { mockAlarmList } from "../utils/mockAlarmList";
import WordPuzzle from "./WordPuzzle";

const AlarmList = () => {
    const [alarmList, setAlarmList] = useState(mockAlarmList);
    const timer = useRef(null);

    const alarmShouldRing = (alarmObj) => {
      const time = new Date();
      const currentHour = time.getHours(), currentMinute = time.getMinutes();

      const correctTime = (parseInt(alarmObj.hour) === currentHour && parseInt(alarmObj.minute) == currentMinute);
      const active = alarmObj.active;

      return correctTime && active;
    };

    // https://stackoverflow.com/questions/64707231/updated-state-value-is-not-reflected-inside-setinterval-in-react
    useEffect(() => {
      const updateAlarm = () => {
        timer.current = setInterval(
          () => {
            const alarm = document.getElementById("alarm");
            console.log(alarmList)

            if (alarmList.every(alarm => !alarmShouldRing(alarm))) {
              console.log("NO ALARM");
              alarm.pause();
              console.log("pause");
              alarm.mute = true;
            } else {
              console.log("alarm should go off");
              document.addEventListener("click", () => {
                alarm.play();
                alarm.loop = true;
                alarm.mute = false;
                console.log("play");
              });
            };
        }, 100);
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
                    />))
                }
            </div>
            <hr className="alarm-puzzle-divider"/>
            <WordPuzzle />
        </div>
      </>
    )
};

export default AlarmList;
