import Alarm from "./Alarm"
const AlarmList =  ({alarmList}) => {
    console.log(alarmList);
    return (
        <div>
        {
            alarmList.map(alarm => (<Alarm alarm={alarm}/>))
        }
        </div>
    )

}

export default AlarmList;