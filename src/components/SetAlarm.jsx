import "./SetAlarm.css";
import { useDbUpdate } from "../utils/firebase";

const SetAlarm = ({ alarmList, setAlarmList, nextAlarmId, setNextAlarmId, currentUser }) => {
  const [update, result] = useDbUpdate(`alarms/${nextAlarmId}`);

  const createAlarm = (e) => {
    e.preventDefault();

    if (currentUser.uid === "guest") {
      alert("Please login to create new alarms!");
      return;
    };

    const alarm = {
      "hour": e.target[2].value == "AM" ? e.target[0].value : String(parseInt(e.target[0].value) + 12),
      "minute": e.target[1].value,
      "active": true
    };

    setAlarmList([...alarmList, alarm]);
    setNextAlarmId(nextAlarmId + 1);

    update({
      ...alarm,
      "alarm_id": nextAlarmId,
      "uid": currentUser.uid
    });
  };

  return (
    <form onSubmit={createAlarm}>
      <div className="setAlarm">
        <div className="setAlarmColumns">
          <div className="setAlarmColumn">
            <select className="setAlarmSelect">
              {
                [...Array(12).keys()].map((hour) => (
                  <option key={`hour-${hour + 1}`} value={hour + 1}>{String(hour + 1).padStart(2, '0')}</option>
                ))
              }
            </select>
          </div>
          <div className="setAlarmColumn">
            <select className="setAlarmSelect">
              {
                [...Array(60).keys()].map((minute) => (
                  <option key={`minute-${minute}`} value={minute}>{String(minute).padStart(2, '0')}</option>
                ))
              }
            </select>
          </div>
          <div className="setAlarmColumn">
            <select className="setAlarmSelect">
              {
                ["AM", "PM"].map((timeSuffix) => (
                  <option key={`minute-${timeSuffix}`} value={timeSuffix}>{timeSuffix}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div>
          <button className="alarmSubmit" type="submit">
            Set Alarm
          </button>
        </div>
      </div>
    </form>
    );
};

export default SetAlarm;
