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