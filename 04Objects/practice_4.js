// Creating Todo playlist and searching objects and index of Object

const myTodo = ['Buy Bread', 'Go to Gym', 'Record videos']
console.log(myTodo.indexOf('Go to Gym'))

const newTodos = [
    {
        title:'Buy bread',
        isDone: false,
    },{
        title:'Go to Gym',
        isDone: false,
    },{
        title:'Record videos',
        isDone: true,
    }
]

const index1 = newTodos.findIndex(function(todo, index) {
    return todo.title === "Record videos"
})
console.log(index1)


// Method 1
const findTodo = function(mytodo, title) {
    const index = mytodo.findIndex(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return mytodo[index]
}
let printMe = findTodo(newTodos, 'Record videos')
console.log(printMe)


// Method 2
const findTodo_2 = function(mytodo, title) {
    const titleInReturn = mytodo.find(function(todo) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleInReturn
}
console.log(findTodo(newTodos, 'Record videos'))