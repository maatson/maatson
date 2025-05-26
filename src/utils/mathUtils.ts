// utils/mathUtils.js
export const roundToTwoDecimalPlaces = (num:number) => {
  return Math.round(num * 100) / 100;
};

export const calculatePercentage = (part:number, total:number) => {
  return (part / total) * 100;
};
