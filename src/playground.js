// object destructuring
const person = {
    name: "Kazım",
    city: "İstanbul"
}

const {name,city} = person
// console.log(name,city)

// array destructuring

const arr = ["istanbul","izmir"]
console.log(arr)

const [a] = arr
console.log(a)

const newArr = ["ankara", ...arr]
console.log(newArr)

// variable definition

const x = "text"
x = "başka text" // !!!! derleyici hata

let y = "text"
y = "başka text"

let city = "istanbul"
let city = "ankara"