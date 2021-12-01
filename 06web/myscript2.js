// Selecting, accessing and manipulating elements of html documents

// changing document title
document.title = "New Title"

// accesing ID
console.log(document.getElementById('idOne'))

// accesing class
console.log(document.getElementsByClassName('classOne'))

// accesing elements by select queries
// all queries will be stored in Arrray format
const myElement = document.querySelectorAll('p')
console.log(myElement)
console.log(myElement[0])
console.log(myElement[1])

// id with # and classes .
const myElement2 = document.querySelectorAll('#idOne')
console.log(myElement2)
const myElement3 = document.querySelectorAll('.classOne')
console.log(myElement3)