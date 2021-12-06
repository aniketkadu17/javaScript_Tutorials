const student = {
    name: "Random",
    age: 24,
    isActive: true
} 
// converting this object to string to be stored ion local storage

const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString)
// will throw string type

// this will set object to Local Storage
localStorage.setItem('student',studentObjToString)

const stringToJSONstudent = JSON.parse(studentObjToString)
console.log(typeof stringToJSONstudent)
// will throw type in Json