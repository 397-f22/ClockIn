import "./Alarm.css";

const Alarm = ({ alarmId, alarm, alarmList, setAlarmList }) => {
  const handleChange = () => {
    if (alarm.ringing) {
      const alarmAudio = document.getElementById("alarm");
      alarmAudio.muted = true;
    };

    setAlarmList([
      ...alarmList.slice(0, alarmId),
      {
        ...alarm,
        active: !alarm.active,
        ringing: false
      },
      ...alarmList.slice(alarmId + 1)
    ]);
  };

    return (
        <div className="alarm">
          <div className={`alarm-text ${alarm.active ? "" : "alarm-inactive"}`}>{String(alarm.hour).padStart(2, '0')}:{String(alarm.minute).padStart(2, '0')}</div>
          <input className="alarm-checkbox" type="checkbox" checked={alarm.active} onChange={handleChange} />
          {
            alarm.ringing
            &&
            <button className="disable-alarm" onClick={() => {document.getElementById("alarm").muted = true;}}>Turn Off</button>
          }
        </div>
    )
};

export default Alarm;
