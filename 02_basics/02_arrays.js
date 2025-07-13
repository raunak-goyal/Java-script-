const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

//  console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//flat =returns a new array with all subarray its values spreadout

console.log(Array.isArray("raunak"))//checks if it is array or not 
console.log(Array.from("raunak"))//converts into array
console.log(Array.from({name: "raunak"})) // gives empty array as it cant make an array of this 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//returns a new array from set of elements
