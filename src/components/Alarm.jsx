const Alarm = ({ alarm }) => {

    return (
        <div>
            <div>{alarm.hour}</div>
            <div>{alarm.minute}</div>
            
        </div>
    )
}

export default Alarm;