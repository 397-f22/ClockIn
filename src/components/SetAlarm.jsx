import "./SetAlarm.css";

const SetAlarm = ({ alarmList, setAlarmList }) => {
  const createAlarm = (e) => {
    e.preventDefault();
    const alarm = {
      "hour": e.target[2].value == "AM" ? e.target[0].value : String(parseInt(e.target[0].value) + 12),
      "minute": e.target[1].value,
      "active": true
    };
    setAlarmList([...alarmList, alarm]);
  }

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
