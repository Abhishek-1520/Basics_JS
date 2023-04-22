//! Array.

//? Storing multiple values and multiple Data-types.

/* const arr =['string',9810,'number'];
console.log(arr[1]); */

//? To know the length of an Array.
/* 
const arr =['string',9810,'number'];
const chan = arr.length;

console.log(chan); */

//? To delete the elements  from an array.

/* const arr =['string',9810,'number'];
const chan = delete arr[1];

console.log(arr); // place on the index is empty.
console.log(arr[1]); // undefined.
console.log(chan); // Boolean value

 */
//? To Add the element in an array.

/*  const arr =['string',9810,'number'];
const chan = arr[3]='added';
console.log(arr); 
console.log(chan);
 */

//? Over write the array elemets.
/* 
const arr =['string',9810,'number'];
const ovw = arr[1] = 9540;
console.log(arr);
console.log(ovw); */

//! Methods of Array.

//? pop() : Fast in nature
// Element will Delete from the end of that array, Returns the poped element from the array.

/* const arr = ['Hello','Abhishek','Choudhary','2x'];
console.log(arr);
const chan=arr.pop(); // Returns that element.
console.log(chan); */

//? push() : Fast in nature
// Element will add at the end of the array elements. Returns the new length of an array.

/* const arr = ['Hello','Abhishek','Choudhary','2x'];
console.log(arr.push("added")); // Returns the length.
console.log(arr);
 */

//? shift() : slow in nature 
// Remove the element from an array in starting. Returns the deleted element.

/* const arr = ['Abhishek','Hello','choudhary'];
console.log(arr.shift()); // returns the element
console.log(arr); */

//? unshift() : slow in nature
// Add the element in the starting of the array. Returns the new length of an array

/* const arr = ['Abhishek',1,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
console.log(arr.unshift('Hello')); // returns the new length.
console.log(arr); */

//! Call Back functions for array - Mostly using with Arrow function.

//? some() : Returns boolean value only : check only one condition and gives output 

/* const arr = [1,2,3,4,5,5];
 function rev(i){
    return i>=4;
}
let fun = arr.some( (i)=> i>=1 );
console.log(fun);
*/

//? every() : Returns boolean value only : But checks the every elements in the array.
/* const arr = [1,2,3,4,5,5];
///const ev = arr.every((i)=> i>=1); // True
const ev = arr.every((i)=> i<=1) // False
console.log(ev) */

//? filter() : Returns the desired array elements.

/* const arr = [1,2,3,4,5,5];
///const fil = arr.filter((i)=> i>=2);
const fil = arr.filter((i)=> i>=5)
console.log(fil)
 */

//? map() : itirate the elements, use to modify.

/* const arr = [1,2,3,4,5,5];
const fun = arr.map((i)=> console.log(i)) // itirated
console.log(fun) // undefined-all
console.log(arr) // array */

//? forEach() : returns only undefined and can know the endexing.

/* const arr = [1,2,3,4,5,5];
const fe = arr.forEach((i,index)=> console.log(i, index));
console.log(fe); // undefined  */
