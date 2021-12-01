// Select single Qurery
const myElement = document.querySelector('p')
console.log(myElement)
myElement.textContent = "Updating this text using JS"

// Select single Qurery
const myElement2 = document.querySelector('p')
myElement2.textContent = "Updating this text using JS"

// Select Muliple Quries in an array
const myElement3 = document.querySelectorAll('p')
myElement3.textContent = "Updating this text using JS"
myElement3.forEach(function(p) {
    p.textContent = "Updated by ForEach Loop using JS"
})

// This will remove Everything from your web 
// applied only or 'p' paragraph tags
myElement3.forEach(function(p) {
    p.remove()
})