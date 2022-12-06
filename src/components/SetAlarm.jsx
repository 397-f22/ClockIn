import "./SetAlarm.css";
import { useDbUpdate } from "../utils/firebase";

const SetAlarm = ({ alarmList, setAlarmList, nextAlarmId, setNextAlarmId, currentUser, testing }) => {
  const [update, result] = useDbUpdate(`alarms/${nextAlarmId}`);

  const createAlarm = (e) => {
    e.preventDefault();

    if (currentUser.uid === "guest") {
      alert("Please login to create new alarms!");
      return;
    };

    let hour;

    if (e.target[0].value === "12") {
      if (e.target[2].value === "AM") {
        hour = 0;
      } else {
        hour = 12;
      }
    } else {
      hour = e.target[2].value == "AM" ? e.target[0].value : String(parseInt(e.target[0].value) + 12);
    };

    const alarm = {
      "hour": String(hour),
      "minute": e.target[1].value,
      "active": true,
      "uid": currentUser.uid,
      "alarm_id": nextAlarmId
    };

    setAlarmList([...alarmList, alarm]);
    setNextAlarmId(nextAlarmId + 1);

    if(!testing){
    update({
      ...alarm,
      "alarm_id": nextAlarmId,
      "uid": currentUser.uid
    });
  }
  };

  return (
    <form onSubmit={createAlarm} data-testid='submit'>
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
