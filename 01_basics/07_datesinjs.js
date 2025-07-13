//object in js (dates) (defined in long string pain point in ECMAs )

// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) 
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) // GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString()) 
console.log(myDate.toLocaleTimeString()) 

console.log(myDate.toDateString()) 
console.log(myDate.toTimeString())//GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) 
console.log(myDate.toJSON()) 
