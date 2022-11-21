import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState, useEffect } from "react";
import "./AlarmList.css";
import { mockAlarmList } from "../utils/mockAlarmList";

const AlarmList = () => {
    const [alarmList, setAlarmList] = useState(mockAlarmList);

    const alarmShouldExpire = (alarmObj, currentHour, currentMinute) => {
      return parseInt(alarmObj.hour) === currentHour && parseInt(alarmObj.minute) == currentMinute;
    };

    useEffect(() => {
      const currentDatetime = new Date();
      const alarm = document.getElementById("alarm");

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
        alarm.muted = true;
        console.log("pause?")
      }

      setInterval(
        () => {
          const currentDatetime = new Date();
          const alarm = document.getElementById("alarm");

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

              // setAlarmList([
              //   ...alarmList.slice(0, i),
              //   {
              //     ...alarmList[i],
              //     ringing: true
              //   },
              //   ...alarmList.slice(i + 1)
              // ]);
            };
          };
        }, 10000)
    }, [alarmList]);

    return (
      <>
        <audio id="alarm">
          <source src="../audio/alarm.mp3" type="audio/mp3" />
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
        </div>
      </>
    )
};

export default AlarmList;
