const arr = [12, 34, 5, 78, 80, 23, 13];

// const arrCopy = arr.filter((num)=>{
//     return num>=18
// })

const arrCopy = arr.filter((num) => {
  return num + 1;
});

console.log(arrCopy);
