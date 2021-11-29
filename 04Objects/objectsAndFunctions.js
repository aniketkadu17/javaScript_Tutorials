// While accessing Object, if you modify its keys or properties ...... then it will change in real object

let objectDeclare = {
    fname:'Aniket',
    lname:'Kadu',
    age:24,
    profile:'Backend Developer'
}
console.log(objectDeclare)


// If we take simple function and pass object to it we can print its properties by its keywords
// But only one line of statement

let objectFunction = function(object) {
    console.log(`Hey my name is ${object.fname} ${object.lname}, 
    my age is ${object.age}, 
    and my profile is ${object.profile}`)
}
objectFunction(objectDeclare)

// OR
// we can also return the statement for holing it into some of the variables

let objectFunction_2 = function(object) {
    return `Hey my name is ${object.fname} ${object.lname}, 
    my age is ${object.age}, 
    and my profile is ${object.profile}`
}
console.log(objectFunction_2(objectDeclare))

// OR
// and we can also return objects with different format ans then it will be accessed it outside of the Function

console.log("___________")
let objectFunction_3 = function(object) {
    return {
        formatOne : `Hey my name is ${object.fname} ${object.lname}`,

        formatTwo : `my age is ${object.age}, and my profile is ${object.profile}`
    }
}
let adOne = objectFunction_3(objectDeclare)

console.log(adOne.formatOne)
console.log("___________")
console.log(adOne.formatTwo)