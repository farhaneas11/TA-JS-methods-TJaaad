// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/
let clonearr = [...numbers];

// - Find the index of `101` in numbers
clonearr.indexOf(101);

// - Find the last index of `9` in numbers
clonearr.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
let stringarr = ["this","is","a","collection","of","words"];
stringarr.join("");
// - Add two new words in the strings array "called" and "sentance"
stringarr.push("called");
stringarr.push("sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
stringarr.join("");
// - Remove the first word in the array (strings)
//stringarr.shift();
delete stringarr(0);
// - Find all the words that contain 'is' use string method 'includes'
stringarr.includes("is");
// - Find all the words that contain 'is' use string method 'indexOf'
stringarr.indexOf("is");
// - Check if all the numbers in numbers array are divisible by three use array method (every)
clonearr.every((elm) => elm / 2);
// -  Sort Array from smallest to largest
clonearr.sort((a,b)=>a>b);
// - Remove the last word in strings
stringarr.pop();
// - Find largest number in numbers
stringarr.filter((elm)=> elm)
// longest string in strings

// - Find all the even numbers
let evenNum = clonearr.filter((elm)=> elm % 2 === 0 );
// - Find all the odd numbers
let oddNum = clonearr.filter((elm) => elm % 2 !==0 );
// - Place a new word at the start of the array use (unshift)
clonearr.unshift(50);
// - Make a subset of numbers array [18,9,7,11]
let subNum = clonearr.slice(4,10);
// - Make a subset of strings array ['a','collection']
let subStr = stringarr.slice(3,5);
// - Replace 12 & 18 with 1221 and 1881
clonearr.replace(12,1221);
clonearr.replace(18,1881)
// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question
stringarr.map(Math.add)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.find(firstname);
// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
