import "./Alarm.css";

const Alarm = ({ alarmId, alarm, alarmList, setAlarmList }) => {
  const handleChange = () => {
    console.log()

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
          <div className={`${alarm.active ? "" : "alarm-inactive"}`}>{String(alarm.hour).padStart(2, '0')}:{String(alarm.minute).padStart(2, '0')}</div>
          <label className="switch">
              <input type="checkbox" checked={alarm.active} onChange={handleChange} />
              <span className="slider round"></span>
          </label>
        </div>
    )
};

export default Alarm;
