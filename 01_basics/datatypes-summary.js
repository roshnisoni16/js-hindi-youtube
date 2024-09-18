//# Primitive datatypes
// 7 types : String (call by value), Number, Boolean(true/false), null(empty), undefined(variable declare h but value assign nahi krna undefined hota h), 
//symbol (kisi bhi value ko unique banane ke liye iska use krte h )
//BigInt(big value ko handle krne ke liye)


//Reference type (non primitive data type)
//Array, Objects, Functions

//Java script dynamically type hai ya statically type ?
//Ans-

const score = 100
const scorevalue = 100.3
const IsLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id=== anotherId);
//const bigNumber = 1234566789124n

const heros = ["shaktiman", "naagraj", "doga"];
 let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
console.log("hello world");
}

console.log(typeof anotherId);




//************************************************
//Stacke(Primitive), jab bhi stack memory use hoti h jo bhi variable declare hota h uska cope milta h

//Heap(Non-primitiv) jab bhi koi memory heap ke andar define hoti h , ya object ya kuchh bhi heap ke andar chala jata h waha se hame original value ka refrence milta h

let myYoutubename = "hiteshchaudharidotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)

