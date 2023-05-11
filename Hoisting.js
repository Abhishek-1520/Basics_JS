//! What is Hoisting ?
//* Java interpreter moves the fuction declaration and the variable declaration to the top of the code block.

//? Types of the Hoisting..
//* Variable Hoisting(var,let,const)               Function Hoisting

//? Variable hoisting 
//* Hoisting occur to only declaration of the variable not to the initialization of the variable.
 
//console.log(a); // a is not defined.

// var a ;
// console.log(a); // undefined.

//* Hoisting..(var)

// console.log(a); // hoisting occur diclaration part has moved to the top of the code block.
// var a;          // undefined

// console.log(a);
// console.log(a);
// var a=20;            // only declaration is hoisting.
// console.log(a)

//* Hoisting in case of function with var keyword.

// console.log(a) // a is not defined (NO- hoisting)
// function demo(){
//     var a ;
//     console.log(a);
// }
// demo();

// function demo(){
//     console.log(a); // Hoisting occur inside the function block.
//     var a;
// }
// demo();

// function demo(){
//     console.log(a); // undefined
//     var a =20; // hoisting occur only for the declaration not for the declaration.
//     console.log(a) // 20
//     var a ;
//     console.log(a) //20
// }
// demo();

// console.log(a) // undefined 
// function demo(){
//     console.log(a); // undefined
//     var a =10;
// }
// demo();
// var a =20; // Hoisting occured outside the block.

//? Hoisting in case of (let,const) keyword.
//* Hoisting occur in case of let and const but the Block of code moves to the Temperal Dead Zone.(TDZ)

// console.log(a); // Refference error.
// let a;

//console.log(a); // Error
// let a = 20;
// console.log(a)

// let a;
// console.log(a) // udefined.

// console.log(a); // syntax error : missing initializer.
// const a;

// const a ;
// console.log(a) // syntax error : missing the initialization.
 
//* In case of function (let,const)

// function demo(){
//     console.log(a); // Refference error.
//     let a ;
// }
// demo()

//? Function Hoisting
//* Only Normal function support Hoisting

// demo()
// function demo(){
//     console.log('Hello guys')
//     console.log(a);
//     var a ;
// }


 //* Checking hoisting for the Anonymous function.
// demo(); // Refference error : cannot access before initialization.
// let demo = function(){
//     console.log(a)
//     var a;
// }

//* Checking hoisting in case of arrow function
// demo(); // errror 
//  let demo = ()=> {
//     console.log(a)
//     var a;
//  }