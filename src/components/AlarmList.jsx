import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState } from "react";
import "./AlarmList.css";
import { mockAlarmList } from "../utils/mockAlarmList";

const AlarmList = () => {
    const [alarmList, setAlarmList] = useState(mockAlarmList);

    return (
        <div className="alarm-list">
            <div className="set-alarm">
                <SetAlarm
                  alarmList={alarmList}
                  setAlarmList={setAlarmList}
                />
            </div>
            <div>
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
        </div>
    )
};

export default AlarmList;
