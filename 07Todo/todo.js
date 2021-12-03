var h3 = document.createElement('h3')
var myValue = document.createTextNode('Welcome to TODO list !!!')
h3.appendChild(myValue)
document.querySelector('h2').appendChild(h3)

// 

var value = 5
while(value > 0) {
    console.log(value)
    value--
}

var ul = document.getElementById('list')
var li

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

function addItem(){
    var input = document.getElementById('input')
    var item = input.value
    ul = document.getElementById('list')
    var textnode = document.createTextNode(item)

    if(item==='') {
        return false 
    } else {
        // create li
        li = document.createElement('li')
        var checkbox = document.createElement('input')
        //create lable
        checkbox.type = "checkbox"
        checkbox.setAttribute('id', 'check')
        // create label
        var label = document.createElement('label')
        label.setAttribute('for','item')// optional

        //add this items to web pages
        
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        li.className = 'visual'
    }
}
function removeItem(){
    li = ul.children
    for (let index=0; index <li.length; index++){
        while(li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}