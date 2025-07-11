// # Primitive
 //7 types: String ,Number .Boolean , null ,undefined ,Symbol ,BigInt (contains some scientific value including numbers )

 const score = 100 

 const scorevalue = 100.3

 
 const IsLoggedIn = false
 
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')

 const anotherId = Symbol('123')

 console.log(id === anotherId); //not same so false as symbol is unique
 

 const bigNumber = 365576899999998n
 //Reference (Non Primitive)

 //Array ,Objects,Functions

 const heros = ["shaktiman","chota bheem"] //array
 let myobj ={name:"raunak" ,age:19}
 
const myfunction = function(){
    console.log("raunak is a great coder");
    
}

console.log(typeof bigNumber);
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */