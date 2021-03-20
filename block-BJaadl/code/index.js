let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(a,b){
  return a.length - b.length;
}
let largeststring = words.sort(findLongestWord).pop();
// - Convert the above array "words" into an array of length of word instead of word.
let arrayword = words.map((string)=>string.length);
// - Create a new array that only contains word with atleast one vowel.
let newarray = words.filter((onevo)=>{
  if(onevo.toLowerCase().includes("a") ||
  onevo.toLowerCase().includes("e") ||
  onevo.toLowerCase().includes("i") ||
  onevo.toLowerCase().includes("o") ||
  onevo.toLowerCase().includes("u")   
  ){
    return true;
  }else {
    return false;
  }
});
// - Find the index of the word "rhythm"
let indexr = words.indexOf('rhythm');
// - Create a new array that contians words not starting with vowel.
let newarrayvowel = words.filter((onevo)=>{
  if(onevo.toLowerCase().startsWith("a") ||
  onevo.toLowerCase().startsWith("e") ||
  onevo.toLowerCase().startsWith("i") ||
  onevo.toLowerCase().startsWith("o") ||
  onevo.toLowerCase().startsWith("u")   
  ){
    return false;
  }else {
    return true;
  }
});
// - Create a new array that contianse words not ending with vowel
let newarrayvowelend = words.filter((onevo)=>{
  if(onevo.toLowerCase().endsWith("a") ||
  onevo.toLowerCase().endsWith("e") ||
  onevo.toLowerCase().endsWith("i") ||
  onevo.toLowerCase().endsWith("o") ||
  onevo.toLowerCase().endsWith("u")   
  ){
    return false;
  }else {
    return true;
  }
});
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(total ,num){
  return total + Math.round(num);
}
let arraysum = numbers.reduce(sumArray);
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
//let multhree = numbers.map((number) => number * 3);
function multhree(num){
  return num * 3;
}
let threemul = numbers.map(multhree);
// - Create a new array that contains only even numbers
function evennum(num){
  return num % 2 == 0;
}
let numeven = numbers.filter(evennum);

// Create  a new array that contains only odd numbers.
function oddnum(num){
  return num % 2 !== 0;
}
let numodd = numbers.filter(oddnum);

// - Create a new array that should have true for even number and false for odd numbers.
function truenum(num){
  return num % 2 == 0;    
}
let numfalse = numbers.map(truenum);
// - Sort the above number in assending order.
function sortasc(a,b){
  return b - a;
}
let ascen = numbers.sort(sortasc);
// - Does sort mutate the original array?
//yes it Does.
// - Find the sum of the numbers in the array.
function sumArray(total ,num){
  return total + Math.round(num);
}
let arraysumm = numbers.reduce(sumArray);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let avgsumm = 0 ;
function averagesum(total ,num){
  avgsumm = total + Math.round(num); 
  return avgsumm;  
}
let avgsum = numbers.reduce(averagesum);
let cal = avgsumm / numbers.length;

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength (a,b){
 return a.length - b.length;
}
let words2 = strings.reduce(averageWordLength);
let totalaverage = words2 / strings.length;