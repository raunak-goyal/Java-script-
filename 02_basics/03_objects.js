// singleton (ek tarah ka ka ek hi object)(made from constructor only)

// Object.create //constructor method (singleton)

// object literals(declaring obj)

const mySym = Symbol("key1")//declaring symbol unique datatype(contains unique value)
//using as a key use square bracket and accesed by square bracket only
const JsUser = {
    name: "raunak",
    "full name": "raunak goyal",
    [mySym]: "mykey1",
    age: 19,
    location: "haridwar",
    email: "raunak@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //given as a string
// console.log(JsUser["full name"])//both in double quotes so cant be accesed by "."
// console.log(JsUser[mySym])

JsUser.email = "raunak@chatgpt.com"
// Object.freeze(JsUser)//doesnt change or update its values
JsUser.email = "raunak@microsoft.com"
// console.log(JsUser);
//functions can be treated as variables
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//object referenceing by string interpolation
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());