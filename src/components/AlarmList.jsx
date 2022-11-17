import Alarm from "./Alarm"
import SetAlarm from "./SetAlarm";
import { useState } from "react";
const AlarmList = () => {
    const [alarmList, setAlarmList] = useState([]);
    console.log(alarmList);
    return (
        <div>
            <div>
                <SetAlarm
                    alarmList={alarmList}
                    setAlarmList={setAlarmList}
                />
            </div>
            <div>
                {
                    alarmList.map(alarm => (<Alarm alarm={alarm} />))
                }
            </div>
        </div>
    )

}

export default AlarmList;