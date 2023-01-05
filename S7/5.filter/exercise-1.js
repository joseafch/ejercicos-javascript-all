const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let newArray = ages.filter(number=>{
    return number > 18
}  )

console.log(newArray);