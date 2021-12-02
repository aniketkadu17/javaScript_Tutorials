const myElement3 = document.querySelectorAll('p')
myElement3.textContent = "Updating this text using JS"
myElement3.forEach(function(p) {
    p.textContent = "Updated by ForEach Loop using JS"
})

const myNewPara = document.createElement('p')
myNewPara.textContent = "Created new element"

document.querySelector('body').appendChild(myNewPara)
