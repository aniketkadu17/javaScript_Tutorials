const myValidation = function () {
    let myValue = document.getElementById('myform').value

    const myNewhead = document.createElement('h2')

    if (isNaN(myValue) || myValue < 1 || myValue > 18) {
        myNewhead.textContent = "Not a valid input"
        document.querySelector('body').appendChild(myNewhead)
        console.log("")
    } else {
        myNewhead.textContent = "This input is OK"
        document.querySelector('body').appendChild(myNewhead)
        console.log("")
    }
}

// form validation

document.querySelector('.myform').addEventListener('submit', (event) => {
    // Bringing all values to Console
    console.log(event.target.username.value)
    console.log(event.target.email.value)
    // // preventing POST data from url
    event.preventDefault()
    // auto refresh form fields after submit
    event.target.username.value = ''
    event.target.email.value = ''
})