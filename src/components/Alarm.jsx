import "./Alarm.css";

const Alarm = ({ alarmId, alarm, alarmList, setAlarmList }) => {
  const handleChange = () => {
    console.log("handle alarm change");
    setAlarmList([
      ...alarmList.slice(0, alarmId),
      {
        ...alarm,
        active: !alarm.active
      },
      ...alarmList.slice(alarmId + 1)
    ]);
  };

    return (
        <div className="alarm">
          <div className={`alarm-text ${alarm.active ? "" : "alarm-inactive"}`}>{String(alarm.hour).padStart(2, '0')}:{String(alarm.minute).padStart(2, '0')}</div>
          <input className="alarm-checkbox" type="checkbox" checked={alarm.active} onChange={handleChange} />
        </div>
    )
};

export default Alarm;
