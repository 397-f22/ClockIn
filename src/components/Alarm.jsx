import "./Alarm.css";
import { parseAlarmTimeString } from "../utils/helpers";
import { useDbUpdate } from "../utils/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const dummyUID = -77;
const Alarm = ({ currentUser, alarmIdList, alarmIdDb, alarm, alarmList, setAlarmList }) => {

  const [update, result] = useDbUpdate(`alarms/${alarmIdDb}`);

  const handleChange = () => {
    if (currentUser.uid === "guest") {
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

  const deleteAlarm = () => {
    setAlarmList([
      ...alarmList.slice(0, alarmIdList),
      ...alarmList.slice(alarmIdList + 1)
    ]);

    console.log(alarmIdDb)

    update({...alarm,
      "uid": dummyUID});

  }

    return (
      <div className="alarm">
        <div className={`alarm-text ${alarm.active ? "" : "alarm-inactive"}`}>{parseAlarmTimeString(alarm)}</div>
        <input className="alarm-checkbox" type="checkbox" role="checkbox" checked={alarm.active} onChange={handleChange} />
        <FontAwesomeIcon onClick={deleteAlarm} icon={faTrashCan} className="trash-button" data-testid={`delete-${alarmIdDb}`}/>
      </div>
    )
};

export default Alarm;
