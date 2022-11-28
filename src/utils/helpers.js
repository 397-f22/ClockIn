export const mockCurrentAlarmData = (currentUser) => {
  const d = new Date();

  const alarmObj = {
    "alarm_id": "0",
    "hour": String(d.getHours()),
    "minute": String(d.getMinutes() + 1),
    "active": false,
    "uid": !currentUser ? "guest" : currentUser.uid
  };

  return alarmObj;
};

export const shuffle = (array) => {
  let currentIndex = array.length, randomIndex;
  let indices = [...Array(array.length).keys()];

  while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];

      [indices[currentIndex], indices[randomIndex]] = [
        indices[randomIndex], indices[currentIndex]];
  }

  return [array, indices];
};

export const alarmShouldRing = (alarmObj) => {
  const time = new Date();
  const currentHour = time.getHours(), currentMinute = time.getMinutes(), currentSecond = time.getSeconds();

  const correctTime = (parseInt(alarmObj.hour) === currentHour && parseInt(alarmObj.minute) === currentMinute && currentSecond < 2);
  const active = alarmObj.active;

  return correctTime && active;
};

export const parseAlarmTimeString = (alarmObj) => {
  const alarmHour = parseInt(alarmObj.hour);
  return String(alarmHour % 12).padStart(2, '0') + ":" + String(alarmObj.minute).padStart(2, '0') + " " + ((alarmHour > 12) ? "PM" : "AM");
};
