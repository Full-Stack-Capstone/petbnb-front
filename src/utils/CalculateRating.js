const CalculateRating = (array) => {
  const sum = array.reduce((result, number) => result + number);
  return sum / array.length;
};

export default CalculateRating;
