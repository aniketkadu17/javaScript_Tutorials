const myElement3 = document.querySelectorAll('p')
myElement3.textContent = "Updating this text using JS"
myElement3.forEach(function(p) {
    p.textContent = "Updated by ForEach Loop using JS"
})

const myNewPara = document.createElement('p')
myNewPara.textContent = "Created new element using js"
document.querySelector('body').appendChild(myNewPara)


const myNewhead = document.createElement('h1')
myNewhead.textContent = "Created new 'h1' element using js"
document.querySelector('body').appendChild(myNewhead)


const myNewLine = document.createElement('em')
myNewLine.textContent = "Created italic element using js"
document.querySelector('body').appendChild(myNewLine)

// handling button
document.querySelector('button').addEventListener('click', (event) => {
    //console.log(" Button is pressed")
    //console.log(event)

    // It will change button message
    event.target.textContent = "I was clicked";
})
