// Normal function
const sayHello = function(name) {
    return "Heellloooooo, "+name+" !!!!"
}
console.log(sayHello('Aniket'))


// Arrow function (Basically one liner function)
const sayGoodBye = (name) => `Good Bye ${name}, See you again`

console.log(sayGoodBye('Aniket'))

const todos = [
    {
        title: "Buy Bread",
        isDone: true,
    },{
        title: "Go to Gym",
        isDone: true,
    },{
        title: "Record Video",
        isDone: false,
    }
]
const thingsDone = todos.filter((todo) => {
    return todo.isDone === true
})
console.log(thingsDone)