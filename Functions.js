//! Function 
//? A function is a block of code.
// syntax:

/* function functionName(){ // function declaration.
    statement;
}

functionName(); // Calling of function
 */

//! Types of Function.

//? Normal Function / Named function / Function Declaration.

/* function employee(name,salary){
        let full_name = name;
        const full_sal = salary;
        console.log(full_name,full_sal,name,salary)
}
employee('Abhihsek',200000); */

//? Anonymous Function: A function who doen't have name.

/* const functions = function(name,salary){
    let full_name = name;
    const full_sal = salary;
    console.log(full_name,full_sal,name,salary);
};
functions('Abhihskek',2300000000000); */

//? Function Expression: It is a part of anonymous and normal function.

/* let abhishek = function demo(name,salary){
    let full_name = name;
    const full_sal = salary;
    console.log(full_name,full_sal,name,salary)
}
abhishek('Abhishek',12120000) */

//? Arrow Function: It is like a anonymous function only.

/* let abhishek = (name,salary) => {
    let full_name = name;
    const full_sal = salary;
    console.log(full_name,full_sal,name,salary)
};
abhishek("Abhishek",323200000); */

//? IIFE function: Immidiatly Invoked Function Expression.

/* (function(name,salary){
    let full_name = name;
    const full_sal = salary;
    console.log(full_name,full_sal,name,salary)
})('Abhihsek',656500000); */