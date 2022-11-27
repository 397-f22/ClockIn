import { useEffect, useState, useRef } from "react";
import "./Alarm.css";
import { parseAlarmTimeString } from "../utils/helpers";

const Alarm = ({ alarmId, alarm, alarmList, setAlarmList, }) => {

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

    return (
      <div className="alarm">
        <div className={`alarm-text ${alarm.active ? "" : "alarm-inactive"}`}>{parseAlarmTimeString(alarm)}</div>
        <input className="alarm-checkbox" type="checkbox" checked={alarm.active} onChange={handleChange} />
      </div>
    )
};

export default Alarm;
