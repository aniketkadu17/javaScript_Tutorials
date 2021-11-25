// Basic user defined function with hello message
let sayHello = function() {
    console.log("Hey Aniket")
    console.log("How is Going")
}
sayHello()

// Sending parameter to function
let sayHola = function(name) {
    console.log(`Hola ${name}`)
    console.log("How is Going")
}
sayHola('Aniket')

// Sending parameter and concatenate in log
let fullNme = function(fname, lname) {
    console.log(`My name is ${fname} ${lname}`)
}
fullNme('Aniket', 'Kadu')

let Add = function(num1,num2) {
    let add = num1 + num2
    return add        //indirect way
}
console.log(Add(7,8))

let multiplier = function(num1, num2) {
    return num1 * num2 //direct way
}
console.log(multiplier(7,8))

// Using Default Parameters in function
let user = function(name= "No_name", id = "Not_Specified") {
    return "Hello " +name +", your id is : "+id
}
console.log(user("Aniket",1234))