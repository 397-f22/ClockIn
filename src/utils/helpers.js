export const word = "describe";

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
  const currentHour = time.getHours(), currentMinute = time.getMinutes();

  const correctTime = (parseInt(alarmObj.hour) === currentHour && parseInt(alarmObj.minute) === currentMinute);
  const active = alarmObj.active;

  return correctTime && active;
};
