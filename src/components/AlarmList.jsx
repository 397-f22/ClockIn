import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState } from "react";
import "./AlarmList.css";

const mockAlarmList = [
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  },
  {
      "hour": "0",
      "minute": "0",
      "active": true
  }
];

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
                  alarmList.map((alarm, id) => (<Alarm key={id} alarm={alarm} />))
                }
            </div>
        </div>
    )

}

export default AlarmList;
