// Username and password checking Basics with javaScript

UserData = {
    Username : "test123",
    password : 'test@123',
}

let userChecker = function(username) {
    if ((username.includes(UserData.Username)) && (username.length == UserData.Username.length)) {
        console.log("User is verified")
    } else {
        console.log("No such user found")
    }
}
userChecker("test123")

let PassChecker = function(pass) {
    if ((pass.includes(UserData.password)) && (pass.length == UserData.password.length)) {
        console.log("password is matched")
    } else {
        console.log("Password did not matched")
    }
}
PassChecker("test@123")