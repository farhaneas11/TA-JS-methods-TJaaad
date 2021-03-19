Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
3. `flat`
4. `push`
5. `indexOf`
6. `lastIndexOf`
7. `includes`
8. `reverse`
9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
let array = [1,2,3,4,5,6];
undefined
array.concat(7);
(7) [1, 2, 3, 4, 5, 6, 7]
name.concat('good').join('');
VM1177:1 Uncaught TypeError: name.concat(...).join is not a function
    at <anonymous>:1:21
(anonymous) @ VM1177:1
array.join("");
"123456"
array.flat();
(6) [1, 2, 3, 4, 5, 6]
name.push('farhan','cene');
VM1397:1 Uncaught TypeError: name.push is not a function
    at <anonymous>:1:6
(anonymous) @ VM1397:1
array.push(8);
7
array
(7) [1, 2, 3, 4, 5, 6, 8]
array.indexOf(8);
6
array.includes(8)
true
array.reverse();
(7) [8, 6, 5, 4, 3, 2, 1]
array.every(NaN,name);
VM1696:1 Uncaught TypeError: NaN is not a function
    at Array.every (<anonymous>)
    at <anonymous>:1:7
(anonymous) @ VM1696:1
function isBigEnough(element, index, array) {
return element >= 10;
}
undefined
array.every(isBigEnough);
false
array.shift(3)
8
array.unshift();
6
array.unshift();
6
array.shift();
6
array
(5) [5, 4, 3, 2, 1]
array.unshift(8);
6
array
(6) [8, 5, 4, 3, 2, 1]
array.splice(0,4,1);
(4) [8, 5, 4, 3]
array.splice(0,4,5);
(3) [1, 2, 1]
array.splice(0,4,0);
[5]0: 5length: 1__proto__: Array(0)
array
[0]
array.find(isBigEnough)
undefined