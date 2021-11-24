var number;
number = 25

// Whenever you find Curly bracese { ITS a CODE BLOCK }
if (number%2==0){
    console.log("Hey it's a Even number");
} else if (number%2!=0){
    console.log("Well  i found this as Odd number");
} else {
    console.log("This is Invalid Entry");
}

// nested and ladder if else condition
// Google varification
var userLogin = "username"
var Password = "password"
var userType = "Admin"
if (userLogin == "username") {

    if (Password == "password") {
        
        if (userType == "user") {
            console.log("This is User Page")
        } else if (userType == "admin") {
            console.log("This is Admin Page")
        } else{
            console.log("This is Visitor Page with limited access")
        }
    } else{
        console.log("Password is Invalid")
    }
} else{
    console.log("No Such user found")
}


// Using Logical operators in conditions
// && - AND operator
// || - OR operator

let isVerified = true
let isloggedIn = true
let hasPaymentToken = false
let isGuest = true

if (isVerified && isloggedIn && hasPaymentToken){
    console.log("Welcome message to User")
    console.log("Granting access to watch videos")
} else if (isVerified && isloggedIn && isGuest){
    console.log("Welcome message to Guest")
    console.log("Allowing to watch only preview videos")
} else {
    console.log("Contact Admin")
}


// Var and let keyword and its difference and uses

let iAMGlobal = "I am a Global Variable"

if (true) {
    let iamLocal = "I am local variable"
    console.log(iAMGlobal)
    console.log(iamLocal)
}
/* This is not allowed 
as 'let' keyword allows variavble accessable within a Block only console.log(iamLocal)*/

// so we use 'var'

if (true) {
    var nowIamGlobal = "I am local variable i am accessable any where"
    iAMGlobal = "I can also change values within the linmits of code block"
    console.log(iAMGlobal)
    console.log(nowIamGlobal)
}
console.log(nowIamGlobal)