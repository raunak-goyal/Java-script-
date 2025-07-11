let score = true

console.log(typeof score);

console.log(typeof (score));
let valueInNumber =Number(score) //typecasting 
console.log(typeof valueInNumber);
console.log(score);

//"33"=>33
//"33abc0" => NaN
// true =>1; false => 0

let IsLoggedIn = ""
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true
// "" =>false
// "raunak" =>true
let somenum = 33
let stringnum = String(somenum)
// console.log(stringnum);
// console.log(typeof stringnum);

// *************Operations***********************

let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%2); //remainder modulus

let str1="hello"
let str2 = "raunak"

let str3 = str1 + str2

console.log(str3); 

console.log("1"+2); //12

console.log(1+"2"); //12

console.log("1"+2+2); //122

console.log(1+2+"2"); //32

 //happens according ECMA guidelines conversion of string or num in  abstract operations
console.log(+true); //1

console.log(+""); //0

let num1,num2,num3

num1 = num2 = num3 = 2 + 2 //make it simple and focus on readability

let gamecounter = 100
gamecounter++; //postfix
++gamecounter;//prefix operator
// mdn webdocs (study from it pre and post)

console.log(gamecounter);




