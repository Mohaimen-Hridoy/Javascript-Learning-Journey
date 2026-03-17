// Primitive

//7 types : string,Number,Boolean,null,Undefined,Symbol,BigInt


const score=100

const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

const bigNumber=5353451848544n


//Reference (Non Primitve)

//Array,Objects,Functions,

const heros=["Superman","Spiderman","Batman"];

let myObj={
    name:"Hridoy",
    age:23,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof anotherId);


