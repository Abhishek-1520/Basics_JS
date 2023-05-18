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

//* New-Keyword- invokes the cunstructor and create a unique instance(object) at every single time.

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
/* 
   class student {
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
 student.grp(); //TypeError: student.grp is not a function
 */



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

//? Static function can't access the property of constructor and method function.

//! Class Inheritence.
//? To inherit all the content of one main class to another sub-class.


//* With one construction function in main class only.

/* class employee{
    constructor(name,salary){
        console.log(`Name = ${name} and salary = ${salary}`);
    }
}

class manager extends employee{
        //sub-class
}

let obj = new manager('Abhihsek',9870000); */

//* With constructor function in both class.
//! Super(): Use to inherit the function from one class to another.

/* class employee{
    constructor(a,b,c){
        this.name=a;
        this.salary=b;
        console.log(`Name = ${this.name} and salary = ${this.salary} ${c}`);
    }
}

class manager extends employee{
    constructor(a,b,c){
        super(a,b,c);
        this.fname = 'Abhishek';
        this.lname = 'hello';
        console.log(`First Name = ${this.fname} and Last Nmae = ${this.lname}`);
        
    }

}

let obj = new manager('Abhishek',2000000,'All set'); */

//* constructor function and method function with SUPER-Keyword.

/* class employee{
    constructor(name,surname){
        this.f_Name = name;
        this.L_Name = surname;
        console.log(`First name = ${this.f_Name} and Last name = ${this.L_Name}`);
    }
    details(sal,add){
        this.sal=sal;
        this.add=add;
        console.log(`Your name ${this.f_Name} salary ${this.sal} address ${this.add}`);
    }
}

class manager extends employee{
    constructor(name,surname,man_name){
        super(name,surname);
        console.log(`Manager name = ${man_name} house name ${this.f_Name}`)
    }
    details(sal,add,pa){
        super.details(sal,add);
        this.pa = pa;
        this.tot = this.sal+this.pa;
        console.log(`Gross salary = ${this.tot} and net salary ${this.sal}`)
    }
}
const object = new manager('Abhishek','Choudhary','Abhishek choudhary');
object.details(200000,'Ghaziabd',20000); */

/* class employee{
    constructor(name,add){
            console.log(name,add);
    }
    details(sal,pa){
        console.log(sal,pa,);
    }
}
class manager extends employee{
    constructor(n,a,mn){
        super(n,a);
        console.log(n,mn,a);
    }
    details(s,p,tot=s+p){
        console.log('total salary'+tot);
        super.details(s,p);
    }
}
const object=new manager('Abhishek','Ghaziabad','choudhary');
object.details(200000,3000) */

//* Inherit of static function.

/* class employee{
    static blue(a){
        console.log('hello employee',a);
    }
}

class manager extends employee{
    static blue(a){
        console.log('hello manager',a)
    }
}
let obj = new manager();
manager.blue('hy');
employee.blue('hi') */

//! No super keyword is usend in Static function .