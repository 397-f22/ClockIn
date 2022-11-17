const Alarm = ({alarm}) => {
    <div>
        <div>{alarm.hours}</div>
        <div>{alarm.minutes}</div>
        <label className="switch">
            <input type="checkbox" checked={alarm.active}/>
            <span class="slider round"></span>
        </label>
    </div>
}

export default Alarm;