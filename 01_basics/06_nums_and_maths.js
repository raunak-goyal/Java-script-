const score =80
//defining declaring number
const bal =new Number(100)
// console.log(bal);
// console.log(bal.toString().length);
// console.log(bal);
// console.log(bal.toFixed(2)); //after decimal zeroes

const othernum = 123.8966
// console.log(othernum.toPrecision(4)); //3=124
//4=123.9
//rounds off
const hundreds = 1000000
// console.log(hundreds.toLocaleString());
//1,000,000
//us standard commas

// console.log(hundreds.toLocaleString('en-IN'));

// *******************Maths**********************
//by default library
// console.log(Math);
// console.log(Math.abs(-4));
//absolute value=>changes - to + only

// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
//chooses top or higher num on rounding off
// console.log(Math.floor(4.2));
//chooses lower num on rounding off

// console.log(Math.min(6,7,8));
// console.log(Math.max(6,7,8));
console.log(Math.random());
//value b/w 0 to 1
console.log((Math.random()*10)+1);
//wanting value in b/w 0 to 10 plus adding 1 if 0 is there after  decimal place
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

