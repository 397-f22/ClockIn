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
