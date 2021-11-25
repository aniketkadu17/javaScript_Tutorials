// Datatype - Array
// Basic Array creation
const superHeroes = ['Iron Man', 'SpiderMan', 'HULK']
console.log(superHeroes)

// printing Array value/string w.r.t. index value
console.log(superHeroes[0])
console.log(superHeroes[1])
console.log(superHeroes[2])

// Array lenght
console.log(superHeroes.length)
console.log(superHeroes[superHeroes.length-1])
console.log(superHeroes[superHeroes.length-2])
console.log(superHeroes[superHeroes.length-3])

// extended use of array in console log
console.log(`
We have ${superHeroes.length} Super heros in our array.
like wise : ... ${superHeroes}
But I like ${superHeroes[2]}`)

// Use of some Array functions
const numbers = ['One', 'Two','Three','Four','Five']
console.log(numbers)
numbers[1] = 'Replace'
console.log(numbers)

// .shift and .unshift
console.log(numbers.shift())
console.log(numbers)
console.log(numbers.unshift('One'))
console.log(numbers)

// .pop and .push
console.log(numbers.pop())
console.log(numbers)
console.log(numbers.push("Five"))
console.log(numbers)

// Splicing
// ( Start from this index, Delete this much values , " And put this as replacement" )
numbers.splice(1,2,"Empty")
console.log(numbers)