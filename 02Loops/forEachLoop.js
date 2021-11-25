const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

console.log(days)

let sayHello = function() {
    console.log(`Hello Aniket`)
}

days.forEach(sayHello)

// Also
days.forEach(function(day, index) {
    console.log(`Hello Aniket today is ${day}
    ${index+1} th day of week`)
})