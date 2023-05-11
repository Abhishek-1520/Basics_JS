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


//? sort() : Sort or arrange the array elements in the alphabatical order.

// const arr =['Abhishek','Choudary','B-block','Rahispur','Govindpuram']
// console.log(arr.sort()); // ['Abhishek', 'B-block', 'Choudary', 'Govindpuram', 'Rahispur']

//? reverse() : It reverse the array elements.

// const arr = [1,2,3,4,5,6,7]
// console.log(arr.reverse())

//? includes() : Returns the boolean value and check whether the  element is present or not.

// const arr = [9810,98989,999,0000]
// console.log(arr.includes(0000)); // true / false

//? concat() : It concat the elements of one array with another array or add the elements.

// const arr = ['hello','Guys','what','?']
// console.log(arr.concat('well','or','not'));

// const arr = [1,2,3,43,4,5,6,6]
// const arr2 = ['abhishek']

// const res = arr2.concat(arr)
// console.log(res)


//? Join() : It joins the array elements into a string type.

// const arr =['Abhishek','Choudhary','Blue']
// console.log(arr.join(' '))

//? slice(start,end+1) : It removes the part of the elements from the existing array elements.

//  const arr = ['hello','Abhishek','Choudhary','Are','you','from']
//  console.log(arr.slice(1,3))  //['Abhishek', 'Choudhary']

//? Splice(index, delete or remains, value) : elements can be inserted in between and can be deleted.

//  const arr = ['hello','what','are','doing']
//  arr.splice(1,0,'Abhishek','choudhary')
//  console.log(arr)

//? isArray() : It checks whether the variable is an array or not, returns the array elements.

// const arr = [1]
// console.log(Array.isArray(arr)) // true

//? find(function) : Return the value who passes the condition from starting.

// const arr = [1,2,30,3,4]
// console.log(arr.find(serch))
// function serch(vari){
//     return vari>=20
// }

//? findindex(function) : Returns the index number of that value who passes the condition.

// const arr = [23,45,67,89]
// console.log(arr.findIndex(ind))
// function ind(sr){
//     return sr>=20
// }

//? tostring method : it convert the whole array element into the string 
//* Once the condition applied to string than no operation will work on it.

// const arr = [12345,'Aman','Anuj']
// console.log(arr.toString());
// console.log(arr)