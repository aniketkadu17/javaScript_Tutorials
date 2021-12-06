localStorage.setItem('key','value')

localStorage.setItem('task','coding')
var myTask = localStorage.getItem('task')
console.log(myTask)

localStorage.setItem('task','testing')
var myTask = localStorage.getItem('task')
console.log(myTask)

localStorage.removeItem('key')
localStorage.removeItem('task')

localStorage.clear()