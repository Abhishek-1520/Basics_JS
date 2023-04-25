//! This - keyword.

//? Returns the current object or current window.

//console.log(this);  //Window {window: Window, self: Window, document: document, 
                                //name: '', location: Location, …}
/* 
function demo(){
    console.log(this); // Returns the current window.
}
demo(); */

//? This in case of object

/* const object = {
    name:prompt('Enter your name.'),
    age:parseInt(prompt("Enter your age here")),
    details:function(){
        ///console.log(this);
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
object.details(); */

//? Note: Arrow function will not give the desired output returns only Crrent window instead of object.

//! USE STRICT 

/* a= 10 ;
console.log(a); //10 */

/* 'use strict'

a=10;
console.log(a); //ReferenceError: a is not defined */

//? USE STRICT in  and outside the function.

/* 'use strict' */

/* function demo(a){
    b=10; // ReferenceError: a is not defined
    console.log(b)
    console.log(a); 
}
demo(1); */

//? Inside the function.

/* function demo(b){
    'use strict'
    a=10; //ReferenceError: a is not defined
    console.log(a);
    console.log(b);
}
demo(8); */

//! CALL: Works on function only to call it in another object.
/* const obj ={
name:prompt('Enter your name.'),
    age:parseInt(prompt("Enter your age here")),
}

const obj2 ={
    name:'Abhishek choudhary',
        age:'fixed:21'
        }

obj.details.call(obj2); */

//? With Parameters and arguments.

/* function demo(lname,fname){
    console.log(`My name is ${this.name} and my age is ${this.age}`);
    console.log(lname);
    console.log(fname);
}

const obj ={
    name:prompt('Enter your name.'),
        age:parseInt(prompt("Enter your age here")),
    }

const obj2 ={
        name:'Abhishek choudhary',
            age:'fixed:21'
            }
 
    demo.call(obj,'choudhary','Abhishek'); */

    //! APPLY : same as CALL And arguments are passed in Array format.

   /*  function demo(lname,fname){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
        console.log(lname);
        console.log(fname);
    }
    
    const obj ={
        name:prompt('Enter your name.'),
            age:parseInt(prompt("Enter your age here")),
        }
    
    const obj2 ={
            name:'Abhishek choudhary',
                age:'fixed:21'
                }
     
        demo.apply(obj2,['choudhary','Abhishek']);  */

//! BIND : IT stores in variable and then that varible will be invoked.

function demo(lname,fname){
    console.log(`My name is ${this.name} and my age is ${this.age}`);
    console.log(lname);
    console.log(fname);
}

const obj ={
    name:prompt('Enter your name.'),
        age:parseInt(prompt("Enter your age here")),
    }

const obj2 ={
        name:'Abhishek choudhary',
            age:'fixed:21'
            }
 
const arr =    demo.bind(obj,'choudhary','Abhishek');

arr();