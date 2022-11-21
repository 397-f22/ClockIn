import "./SetAlarm.css";

const SetAlarm = ({ alarmList, setAlarmList }) => {
  const createAlarm = (e) => {
    e.preventDefault();
    const alarm = {
      "hour": e.target[0].value,
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
            <div>H</div>
            <select className="setAlarmSelect">
              {
                [...Array(24).keys()].map((hour) => (
                  <option key={`hour-${hour}`} value={hour}>{String(hour).padStart(2, '0')}</option>
                ))
              }
            </select>
          </div>
          <div className="setAlarmColumn">
            <div>M</div>
            <select className="setAlarmSelect">
              {
                [...Array(60).keys()].map((minute) => (
                  <option key={`minute-${minute}`} value={minute}>{String(minute).padStart(2, '0')}</option>
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
