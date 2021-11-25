const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

for (let index = 0; index <= days.length-1; index++) {
    const element = days[index];
    console.log(element)
}
console.log("")

// shorten Way
for (let index = 0; index <= days.length-1; index++) {
    console.log(days[index])
}
console.log("")

//reverse count
for (let index = days.length-1; index >= 0; index--) {
    console.log(days[index])
}