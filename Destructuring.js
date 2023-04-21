//! We can use (not printing) the elements or property of an object or array with DESTRUCTURING.

//? Problems for using properties of object:-

/* const obj = {
    name:'Abhishek',
    Age:21,
    Mob:9810796626
}
console.log(obj.name) //Simple printing.
let oname = obj.name; // importing in a another variable.
let oage = obj.Age; 

console.log(`My name is ${oname} and age is ${oage}`);  */// use of property

//! Destructuring concept for solving the problem.

//? In case of Object.

/* const obj = {
    name:'Abhishek',
    Age:21,
    Mob:9810796626,
    Address:'Govindpuram'
} */

/* const {name,Age,Mob,Address} = obj; // Destructuring
console.log(name);
console.log(Age);

console.log(`My name is ${name}, I'm ${Age} years old.`)  */// Access of property as a Whole.

//? In Case of Nested Object.

/* const obj = {
    name:'Abhishek',
    Age:21,
    Mob:9810796626,
    Address:{
        HNo:1,
        Locality:"Nahar Enclave",
        City:"Ghaziabad"
    }
} */
/* 
let {name,Age,Mob,Address:{HNo,Locality,City}}=obj;

console.log(obj.Address)
console.log(`My home addres is House no.${HNo} and the locality is ${Locality} in the city ${City}`); */

//? Using Spread operator in object.
//?-->Used to store the remaining data for future use.

/* let {name,Age,Mob,Address:{...add}}=obj;
console.log(add); */

//! Problem while using array elements.

/* let arr = ['Abhishek','choudhary','GZB'];

//console.log(arr)
let in1 = arr[0];
let in2 = arr[1];
let in3 = arr[2];

console.log(in1,in2,in3)
console.log(`My home addres is House no.${in1} and the locality is ${in3} in the city ${in3}`); */


//? In case of Array (Destructuring).

/* let arr = ['Abhishek','choudhary','GZB'];
let[in0,in1,in2]=arr;
console.log(`My home name is ${in0} my surname is ${in1} in the city ${in2}`);
 */

//? Nested Array.
/* 
let arr = ['Abhishek','choudhary',[444,'Nahar','GZB']];
let[in0,in1,[Hno,loc,cit]]=arr;
console.log(Hno)
console.log(`My home name is ${in0} my surname is ${in1} in the city ${loc}`) */

//? Default value in array.

/* let arr =['Abhsihek',]
let [a,b='mobile number']=arr; // Default value
console.log(a,b); */