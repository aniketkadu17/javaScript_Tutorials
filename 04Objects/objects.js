//  ==   check equality
//  ===  checks identity
let a = {}
let b = {}
console.log(a===b) // Always gives you false

// objects are most powerfull datatypes
// objects are used for Calling Api's, Database ....

let objectDeclare = {
    fname:'Aniket',
    lname:'Kadu',
    age:24,
    profile:'Backend Developer'
}

console.log(objectDeclare)

console.log(`Hey my name is ${objectDeclare.fname} ${objectDeclare.lname}, 
my age is ${objectDeclare.age}, 
and my profile is ${objectDeclare.profile}`)


let udemyCourse = {
    courseName : "Python Developer",
    duration : 15,
    price : 299
}
console.log(`
    Hey ${objectDeclare.fname} ${objectDeclare.lname},
    you wanted to be A ${objectDeclare.profile},
    
    We are recommending you our new ${udemyCourse.courseName} course of ${udemyCourse.duration} hours duration 
    and this course will cost you only ${udemyCourse.price} Rs.

    HURRY UP !!!!
`)