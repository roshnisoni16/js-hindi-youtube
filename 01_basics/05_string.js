const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "Value");
console.log(`hello my name is ${name} and my repo Count ${repoCount}`);

const gameName = new String('hitesh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //gameName ko ek newString name ke variable me store kr liya h 
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
const greeting  = '       hello world       ';
console.log(greeting);
console.log(greeting.trim());
const url ="https://www.codewithharry.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'));
