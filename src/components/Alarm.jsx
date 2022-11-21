import { useEffect, useState, useRef } from "react";
import "./Alarm.css";
import { alarmShouldRing } from "../utils/helpers";

const Alarm = ({ alarmId, alarm, alarmList, setAlarmList, puzzleSolveStatus, setPuzzleSolveStatus }) => {
  const [alarmButton, setAlarmButton] = useState(false);
  const [alarmOn, setAlarmOn] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const updateAlarm = () => {
      timer.current = setInterval(
        () => {
          setAlarmButton(alarmShouldRing(alarm));
      }, 1000);
    };

    updateAlarm();
    return () => clearInterval(timer.current);
  }, []);

  const handleChange = () => {
    setAlarmList([
      ...alarmList.slice(0, alarmId),
      {
        ...alarm,
        active: !alarm.active
      },
      ...alarmList.slice(alarmId + 1)
    ]);
  };

  const handleClick = () => {
    const alarm = document.getElementById("alarm");

    alarm.play();
    alarm.loop = true;
    alarm.mute = false;

    setAlarmOn(true);
    setPuzzleSolveStatus(false);
  };

    return (
      <div className="alarm">
        <div className={`alarm-text ${alarm.active ? "" : "alarm-inactive"}`}>{String(alarm.hour).padStart(2, '0')}:{String(alarm.minute).padStart(2, '0')}</div>
        <input className="alarm-checkbox" type="checkbox" checked={alarm.active} onChange={handleChange} />
        {
          alarmButton
          &&
          <div className={`alarm-button ${(alarmOn && !puzzleSolveStatus) ? "alarm-active" : ""}`} onClick={handleClick}>
            {
            (alarmOn && !puzzleSolveStatus)
            ? "Stop Alarm"
            : "Start Alarm"
            }
          </div>
        }
      </div>
    )
};

export default Alarm;
