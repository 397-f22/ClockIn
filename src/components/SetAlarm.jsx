const SetAlarm = ({ alarmList, setAlarmList }) => {
  const createAlarm = (e) => {
    e.preventDefault();
    const alarm =
    {
      "hour": e.target[0].value,
      "minute": e.target[1].value,
      "active": true
    };
    console.log(alarm)
    setAlarmList([...alarmList, alarm]);

  }

  return (
    <form onSubmit={createAlarm}>
      <div className="setAlarm">
        <select>
          {
            [...Array(24).keys()].map((hour) => (
              <option key={`hour-${hour}`} value={hour}>{String(hour).padStart(2, '0')}</option>
            ))
          }
        </select>
        <select >
          {
            [...Array(60).keys()].map((minute) => (
              <option key={`minute-${minute}`} value={minute}>{String(minute).padStart(2, '0')}</option>
            ))
          }
        </select>
      </div>
      <button className="alarmSubmit" type="submit" >
        Set Alarm
      </button>
    </form>)
};

export default SetAlarm;
