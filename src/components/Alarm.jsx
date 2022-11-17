const Alarm = ({ alarm }) => {

    return (
        <div>
            <div>{alarm.hour}</div>
            <div>{alarm.minute}</div>
            <label className="switch">
                <input type="checkbox" checked={alarm.active} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Alarm;