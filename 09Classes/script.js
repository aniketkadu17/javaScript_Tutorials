class UserData {
    constructor(fname,lname,age) {
        this.fname = fname
        this.lname = lname
        this.age = age
    }

    getFullName () {
        return `My Name is ${this.fname} ${this.lname}.
        and I am ${this.age} years old`
    }
    editUserData(Ufname,Ulname,Uage) {
        this.fname = Ufname
        this.lname = Ulname
        this.age = Uage
    }
}

const ask = new UserData('Robo', 'System', 50)
console.log(ask)

const abc = new UserData('A', 'K', 23)
console.log(abc)

console.log(ask.getFullName())

abc.editUserData("hellllllo","Everybody",25)
console.log(abc.getFullName())