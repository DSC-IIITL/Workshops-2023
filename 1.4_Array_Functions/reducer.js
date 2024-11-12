const arr = [1,2,3,4,5,6]

const sum = arr.reduce((total,num)=>{
    return total+num
    //return total*num
},0)

console.log(sum)