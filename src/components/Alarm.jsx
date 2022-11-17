import "./Alarm.css";

const Alarm = ({ alarm }) => {

    return (
        <div className="alarm">
          <div>{String(alarm.hour).padStart(2, '0')}:{String(alarm.minute).padStart(2, '0')}</div>
          <label className="switch">
              <input type="checkbox" checked={alarm.active} readOnly />
              <span className="slider round"></span>
          </label>
        </div>
    )
}

export default Alarm;
