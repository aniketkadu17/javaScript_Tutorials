// Understanding basic concepts of Mapping and Forof Loop

var john = {
    name:"I am John",
    age:24,
    isActive:true,
}
var aniket = {
    name:"I am Aniket",
    age:24,
    isActive:false,
}
var sam = {
    name:"I am Sam",
    age:35,
    isActive:false,
}
// 
let users = new Map()

console.log(typeof users)

users.set('john', john)
users.set('aniket', aniket)
users.set('sam', sam)

console.log("_________users__________")
console.log(users)

console.log("_________users.size__________")
console.log(users.size)

console.log("_________users.get('john')__________")
console.log(users.get('john'))

console.log("__________users.keys()_________")
console.log(users.keys())

console.log("__________users.values()_________")
console.log(users.values())

// Accessing mapped objects using for of
for (const key of users.keys()) {
    console.log(key)
}
console.log("___________________")
for (const value of users.values()) {
    console.log(value.name)
}
console.log("___________________")
for (const [key, value] of users.entries()) {
    console.log(key + ' = '+ value.name)
}
console.log("___________________")

// also by using for each
console.log("_________using for each__________")
users.forEach((value, key) => console.log(key + ' = '+ value.name))