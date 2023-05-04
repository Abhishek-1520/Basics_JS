//! More about Java Script.
//* Java Script is a single threaded language : Perform one thing at a time.
//* It's a non blocking : All things are fully executed in the java script.
//* Asynchronous concurent language: Many things are performed simultaniously.
//* V-8 is Run time environment in the java script.

//! Diff. between synchronous and Asynchronous.
//* Synchronous: Process of javaScript, Execute the one by one.
//*              Problem: A code who takes much time in execution is executing one by one and rest all waiting.

//* Asynchrounous: A code who run in the background is asychronous. after the execution of the synchronous code this is will execute in later.

//Problem::

/* console.log('Hello good morning');

for(i=0;i<=100000;i++){
    document.write(i);

}
console.log('By.. Good night') */
/* 
console.log("Hello bro"); // Output =1 
setTimeout(function(){
    for(i=1;i<=10000;i++){
        console.log(i);  // Output =3
    }
},3000);
console.log("By.. gppd evening") // output =2 */

//! SetTimeout(function,time): It execute after the specified time given. Arro and anonyumous function can be used.
/* 
setTimeout(function(nam){
    for(i=0;i<=nam.length;i++){
        console.log(i)
    }
},2000, "Abhishek"); */
 
//! ClearTimeout(): Clear tiem out clear o stop yhe execution of the settimeout().
/* 
const id = setTimeout(function(nam){
    for(i=0;i<=nam.length;i++){
        console.log(i)
    }
},2000, "Abhishek");

clearTimeout(id); // Code will not execute. */

//! SetInterval(): It will execute multiple or infinite times after the specific time is given.
/* 
const id = setInterval(function(){
    document.write('Shree Radha Radha ')
},2000) */

//! ClearInterval(): It will stop the execution of the Setinterval.
/* 
const id = setInterval(function(){
    document.write('Shree Radha Radha ')
},2000);

setTimeout(function(){
    console.log("Over");
    clearInterval(id)
},6000); */

//* Always synchronous code will execute first and then asynchronous will execute.

//* It works like synchronous format only.
/* 
setTimeout(function(){
    console.log('Hello')  // Output =1 

    setTimeout(function(){
        console.log('Bro,Good morning') // output =2
    },1000)
},2000) */

//! Execution Stack / Call Stack
//* Execution stack is a type of memory heap in which execution context is stored.

//! Execution Context
//* Execution context is a type of container or environment where our synchronous and asynchronous code is executed.

//? Global execution context:
//* It's also called a By default excution context.Automatically created, while code is to be written in an IDE.

//? Function Execution context:
//* It's a seprate execution context in which only functuion are stored and popped out after execution.

//! Web-API: Application programming interface.
//* API Holds the asynchronous data with it while executing the code.
//* It also make interact from one system with another actual system.

//! Micro Queue / Job Queue.
//* A queue which holds promises with it and first priority execution in Asynchronous code.

//! Macro Queue / Call Back Queue.
//* It holds the set-timeout / interval / clear-Interval / timeout.

//! Event loop.
//* It checks again and again the execution stack to be empty or not. if EMPTY Code is pushed for execution.

//! Call back() function.
//* A function inside function is call a back function.
/* 
function addname(call){
    console.log('Called after execution of dispname function')
    call('Blue eyes');
}

function dispname(callback){
    let names = prompt("Enter your name first");
    console.log('Your name is ',names);
    console.log(callback);
    
}
addname(dispname) */