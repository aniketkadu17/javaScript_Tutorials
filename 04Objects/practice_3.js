// Different Properties and methods used for Numbers and strings

let string = "Teststring1234"
let a = 3.143466674346784

console.log(string.toLowerCase())
console.log(string.toUpperCase())

// to fixed decimal point 
console.log(a.toFixed(3))

// floor value ==> 3
console.log(Math.floor(a))

// ceil value ==> 4
console.log(Math.ceil(a))

// Generating random Number 0 to 1
console.log(Math.random())
// Generating random Number 1 to 10
console.log(Math.random() * 10)

// Random number with range
let lower = 10
let upper = 13

console.log(Math.random() * (upper - lower + 1) + lower)

