let myTodoList = {
    day : "",
    meetingAdded : 0,
    meetingsDone : 0,
    meetingLeft : 0
}

let setDay = function(todo, day) {
    todo.day = day
}
let setMeetAdd = function(todo, meetAdd) {
    todo.meetingAdded = todo.meetingAdded + meetAdd
}
let setMeetDone = function(todo, meetDone) {
    todo.meetingsDone = todo.meetingsDone + meetDone
}
let setMeetLeft = function(todo) {
    todo.meetingLeft = todo.meetingAdded - todo.meetingsDone
}
console.log("--------------------------------")
console.log(myTodoList)

console.log("--------------------------------")
setDay(myTodoList,"Wednesday")
setMeetAdd(myTodoList,5)
setMeetDone(myTodoList,4)
setMeetLeft(myTodoList)


console.log(myTodoList)
console.log("--------------------------------")