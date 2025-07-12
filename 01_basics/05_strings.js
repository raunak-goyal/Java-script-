const name ="raunak"
const repocount = 50
//console.log(name+repocount+"value");//outdated

//use string interpolation
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename =new String('raunak goyal') //declaring my string

console.log(gamename[0]);//r accesing key

console.log(gamename__proto__);
//accesing objects //{} empty here
console.log(gamename.length); //gives length
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2)); // gives character at that position
console.log(gamename.indexOf());//gives  position at that character

const newstring =gamename.substring(0,4)
//slicing and dividing it into a substring
console.log(newstring);

//another method to slice
const anotherstring =gamename.slice(-8,4) //reverse slicing

//method => trim or replace

const str1 ="   raunak  "
console.log(str1.trim()); //removes white  spaces plus line terminator 
// there exists trim start and trim end 
const url ="r.goyal.com"
console.log( url.replace('r','v'));

console.log(url.includes('raunak')); // checks if string contains it or not

console.log(gamename.split('-')); // have to give separator and limit  





