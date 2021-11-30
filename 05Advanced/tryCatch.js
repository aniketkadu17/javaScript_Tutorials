// Using try and catch (error) in functions

const convertCurrency = (dollar) => dollar * 72
const myRupee = convertCurrency(10)
console.log(myRupee)

const convertCurrency_2 = (dollar) => {
    if (typeof dollar === 'number'){
        return dollar * 72
    } else {
        throw Error("Put amount in number")
    }
}
//const myRupee_2 = convertCurrency_2("1a0")
//console.log(myRupee_2)

const convertCurrency_3 = (dollar) => dollar * 72
try{
    const myRupee_3 = convertCurrency_3(10000)
    console.log(myRupee_3)
} catch(error) {
    console.log(error)
}

console.log("Statements after errors")