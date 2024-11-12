const arr = [12, 34, 67, 89, 45]

//const arrCopy = arr.map(Math.sqrt)

const arrCopy = arr.map((element)=>{
    return element+1
})

// const arrCopy = arr.map((number) => {
//     return number*100
// })

console.log(arrCopy)