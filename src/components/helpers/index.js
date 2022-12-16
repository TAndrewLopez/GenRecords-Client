export const formatToUSD = (num) => {
  const numString = `${num}`;
  const dollars = numString.slice(0, numString.length - 2);
  const cents = numString.slice(numString.length - 2);
  return `${dollars}.${cents}`;
};

export const popularityToStart = (num) => {
  return num / 20;
};
