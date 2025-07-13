//array
//1. Array is written in brackets [  ].
const arr=[1,2,3,4,5,true,"raunak"]
//2.Array data type is an object.
//3.Array can contain different data types . i.e string,number,boolean,array etc.
//4. Array is zero based indexing. It starts with zero.
//5. Once changed its original value will also change beacause it is non primitive (refrence) type.
//arrays are resizeable,mix datatypes
//makes shallow copies whose property shares the same reference point
//property do not share the same reference point
const myheroes =["shaktimaan ","papa","powerpuff girls"]
// console.log(arr[1]);
// console.log(myheroes[2]);

//ARRAY METHODs :

//1.Push = adds value to last of an array.
arr.push(6)
// console.log(arr);//[ 1, 2, 3, 4, 5, true, 'raunak', 6 ]

//2. Pop = removes last value of an array.
arr.pop()
// console.log(arr);
//[ 1, 2, 3, 4, 5, true, 'raunak' ]
//3. Unshift = adds value at first of an array.
arr.unshift(0)
// console.log(arr);
//4.Shift = removes first value of an array.
arr.shift()
// console.log(arr);
//5. Includes = checks true or false.
// console.log(arr.includes(9));
//6. IndexOf = checks the position of value in number form.
// console.log(arr.indexOf(9)); //-1 doesnt exist
//7.Join = converts to string.
const newarr=arr.join()
// console.log(arr);
// console.log(newarr);
// console.log(typeof newarr);
//8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
console.log("A",arr); //A [ 1, 2, 3, 4, 5, true, 'raunak' ]
const  myn1=arr.slice(1,3)
console.log(myn1);//[ 2, 3 ]
console.log("B",arr);//B [ 1, 2, 3, 4, 5, true, 'raunak' ]
//9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

const  myn2=arr.splice(1,3)
console.log(myn2);//[ 2, 3,4 ]
console.log("c",arr);

//we can merge multiple arrays using concat as well like spread syntax..

// const Array1 = [1,2,3,4,5];
// const Array2 = [5,6,7,8,9,10];
// const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];
// const concatAll = Array1.concat(Array2, Array3,Array4)
// console.log(concatAll)