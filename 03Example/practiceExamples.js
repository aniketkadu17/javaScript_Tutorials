// Creating Toodo list using Array and Loops
const myTodo = []

myTodo.push("JavaScript")
myTodo.push("GitHub")
myTodo.push("Project Understanding")
myTodo.push("Log Out")

myTodo.forEach(function(todo, index){
    console.log(`
    Your tast no. ${index+1} is : ${todo}`)
})

// Calculating Grade
let getMyGrade = function(marks,total) {
    let percentage = (marks/total) * 100

    let grade = 'N.A.'
    if(percentage >= 90) {
        grade ="A+"
    } else if(percentage >= 80) {
        grade ="A"
    } else if(percentage >= 70) {
        grade ="B+"
    } else if(percentage >= 60) {
        grade ="B"
    } else if(percentage >= 50) {
        grade ="C+"
    } else if(percentage >= 40) {
        grade ="C"
    } else{
        grade ="F"
    }
    return ` Your Grade is ${grade}`
}
let yourResult = getMyGrade(69,100)
console.log(yourResult)