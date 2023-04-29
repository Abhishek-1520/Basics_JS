//! Define Class.
//? A class is the only template or blueprint for the object.
//? Dynamic in Nature.
//? A class is a life cycle.
//? Similar type of object can be created by using the class(template or blueprint).

//Syntax: 
//  class students {
    //This is called a class.
//  }



//! Object Creation..
//? Another way of creating object other than creating normal object.

/* let obj = new Object();

obj.Name='Abhishek';
obj.Class='3rd'
console.log(obj) */ //{Name: 'Abhishek', Class: '3rd'}



//! Function in class 
//? Types:          Constructor()        Method()        static()


//* Constructor(): This function is called automatically when object of the class is created.
//*                We use this function to declare properties in class while calling the object.

/* class student {
    constructor(){
        let b = prompt('Enter your name');
        console.log(`Your name is ${b}`)
    }
}

let myobj = new student(); */



//? Consoling only object.
/* class student {
    constructor(){
        let b = prompt('Enter your name');
        console.log(`Your name is ${b}`)
    }
}

let myobj = new student();

console.log(myobj); */ // student {} [[Prototype]] :  Object




//* Method(): This is a user defined function. Like a Anonymous function. It's called normally.

/* class student {
    grp(){
        let a = 20;
        let b = 30;
        let c = a+b;
        console.log(`Sum of a and b is = ${c}`);
    }
}
 let obj = new student();
 obj.grp(); */




 //? Constructor and method function.

 /* class student {
    constructor(){
        this.n = prompt('ENter name');
    }
    grp(){
        let a = 20;
        let b = 30;
        let c = a+b;
        console.log(`Sum of a and b is = ${c}`);
        console.log(`your name is also printed ${this.n}`);
    }
}
 let obj = new student();
 obj.grp(); 
 student.grp(); */ //TypeError: student.grp is not a function




 //* Static(): Only a class can access this function. (className.stati function name())

/*  class student {
    static fun(){
        let a = prompt('Enter your name');
        let b = prompt('Enter your surname')
         console.log(a+b);
    }
 }
 let obj = new student(); // optional
/// obj.fun(); //TypeError: obj.fun is not a function
 
student.fun(); */ // Directly can be called without creating an object.