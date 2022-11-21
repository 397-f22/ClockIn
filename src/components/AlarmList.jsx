import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState, useEffect } from "react";
import "./AlarmList.css";
import { mockAlarmList } from "../utils/mockAlarmList";
import WordPuzzle from "./WordPuzzle";

const AlarmList = () => {
    //HELLO AGAIN
    const [alarmList, setAlarmList] = useState(mockAlarmList);

    const alarmShouldExpire = (alarmObj) => {
      const time = new Date();
      const currentHour = time.getHours(), currentMinute = time.getMinutes();
      return parseInt(alarmObj.hour) === currentHour && parseInt(alarmObj.minute) == currentMinute;
    };

    useEffect(() => {
      const currentDatetime = new Date();
      const alarm = document.getElementById("alarm");
    //   alarm.muted = true;
    //   alarm.play();

      for (let i = 0; i < alarmList.length; i++) {
        if (!alarmList[i].active) {
          continue;
        };

        if (alarmList[i].ringing) {
          continue;
        }

        if (alarmShouldExpire(alarmList[i], currentDatetime.getHours(), currentDatetime.getMinutes())) {
          document.addEventListener("click", () => {
            alarm.play();
          });

          setAlarmList([
            ...alarmList.slice(0, i),
            {
              ...alarmList[i],
              ringing: true
            },
            ...alarmList.slice(i + 1)
          ]);
        };
      };
    }, []);

    useEffect(() => {
      if (alarmList.every(alarm => !alarm.ringing)) {
        const alarm = document.getElementById("alarm");
        alarm.pause();
        console.log("pause?")
      }

      setInterval(
        () => {
          const currentDatetime = new Date();
          const alarm = document.getElementById("alarm");
          if (alarmList.every(alarm => !alarmShouldExpire(alarm))) {
            alarm.pause();
            alarm.mute = true;
          }
          else {
            alarm.play();
            alarm.mute = false;
          }

        }, 1000)
    }, [alarmList]);

    return (
      <>
        <audio id="alarm" controls="true" >
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
            <WordPuzzle alarmList={alarmList} setAlarmList={setAlarmList}/>
        </div>
      </>
    )
};

export default AlarmList;
