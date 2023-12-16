const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((acc, cur) => {
  // return total+num
  return acc + cur;
});

console.log(sum);
