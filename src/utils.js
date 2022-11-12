export const randomNum = () => Math.round(Math.random() * 100);

export const randomNumByMax = (max) => Math.floor(Math.random() * max);

export const randomOper = () => {
  const arrayOperation = ['+', '-', '*'];

  return arrayOperation[randomNumByMax(arrayOperation.length)];
};

export const randomNumByMinMax = (min, max) => {
  const num = Math.floor((Math.random() * max) + min);
  if (num <= max) {
    return num;
  }
  return randomNumByMinMax(min, max);
};
