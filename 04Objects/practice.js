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


// Use of Methods and this keywords in todo list


let myTodoList_2 = {
    day : "",
    meetingAdded : 0,
    meetingsDone : 0,
    meetingLeft : 0,

    // this is a keyword where all properties of Objects are accessed
    setDay: function(day) {
        this.day = day
    },
    setMeeting: function(meetadd) {
        this.meetingAdded = this.meetingAdded + meetadd
    },
    setMeetingDone: function(meetDone) {
        this.meetingsDone = this.meetingsDone + meetDone
    },
    setMeetingLeft: function() {
        this.meetingLeft =  this.meetingAdded - this.meetingsDone
        console.log(`You have ${this.meetingLeft} meeting left today`)
    },
}
console.log("--------------------------------")
console.log(myTodoList_2)
myTodoList_2.setDay("Friday")
console.log(myTodoList_2)

myTodoList_2.setMeeting(2)
console.log(myTodoList_2)

myTodoList_2.setMeetingDone(1)
console.log(myTodoList_2)

myTodoList_2.setMeetingLeft()
console.log(myTodoList_2)
console.log("--------------------------------")