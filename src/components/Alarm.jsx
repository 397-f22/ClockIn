import "./Alarm.css";
import { parseAlarmTimeString } from "../utils/helpers";
import { useDbUpdate } from "../utils/firebase";

const Alarm = ({ currentUser, alarmIdList, alarmIdDb, alarm, alarmList, setAlarmList }) => {
  const [update, result] = useDbUpdate(`alarms/${alarmIdDb}`);

  const handleChange = () => {
    if (!currentUser) {
      alert("Please login first to edit alarms!");
      return;
    };

    setAlarmList([
      ...alarmList.slice(0, alarmIdList),
      {
        ...alarm,
        active: !alarm.active
      },
      ...alarmList.slice(alarmIdList + 1)
    ]);

    console.log(alarmIdDb)

    update({
      ...alarm,
      "active": !alarm.active
    });
  };

    return (
      <div className="alarm">
        <div className={`alarm-text ${alarm.active ? "" : "alarm-inactive"}`}>{parseAlarmTimeString(alarm)}</div>
        <input className="alarm-checkbox" type="checkbox" checked={alarm.active} onChange={handleChange} />
      </div>
    )
};

export default Alarm;
