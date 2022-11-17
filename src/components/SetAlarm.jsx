const createAlarm = (e) => {
  const alarm =
    {"hour": e.value[0],
      "minute": e.value[1],
      "active": true
    };
}

const SetAlarm = ({ alarmList, setAlarmList }) => (
  <form>
    <div className="setAlarm">
      <select onChange={e => setAlarmSelectedHour(parseInt(e.target.value))}>
        {
          [...Array(24).keys()].map((hour) => (
            <option key={`hour-${hour}`} value={hour}>{String(hour).padStart(2, '0')}</option>
          ))
        }
      </select>
      <select onChange={e => setAlarmSelectedMinute(parseInt(e.target.value))}>
        {
          [...Array(60).keys()].map((minute) => (
            <option key={`minute-${minute}`} value={minute}>{String(minute).padStart(2, '0')}</option>
          ))
        }
      </select>
    </div>
    <button className="alarmSubmit" type="submit" onSubmit={createAlarm}>
        Set Alarm
    </button>
  </form>
);

export default SetAlarm;
