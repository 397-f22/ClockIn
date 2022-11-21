import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState, useEffect } from "react";
import "./AlarmList.css";
import { mockAlarmList } from "../utils/mockAlarmList";
import WordPuzzle from "./WordPuzzle";

const AlarmList = () => {
    const [alarmList, setAlarmList] = useState(mockAlarmList);

    const alarmShouldRing = (alarmObj) => {
      const time = new Date();
      const currentHour = time.getHours(), currentMinute = time.getMinutes();

      const correctTime = (parseInt(alarmObj.hour) === currentHour && parseInt(alarmObj.minute) == currentMinute);
      const active = alarmObj.active;

      return correctTime && active;
    };

    useEffect(() => {
      setInterval(
        () => {
          const alarm = document.getElementById("alarm");
          console.log(alarmList)

          if (alarmList.every(alarm => !alarmShouldRing(alarm))) {
            alarm.pause();
            console.log("pause");
            alarm.mute = true;
          } else {
            document.addEventListener("click", () => {
              alarm.play();
              alarm.loop = true;
              alarm.mute = false;

              console.log("play");
            });
          };
        }, 3000)
    }, []);

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
