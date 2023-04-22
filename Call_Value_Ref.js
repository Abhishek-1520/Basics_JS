//! Call By Value.
//? Works only in Primitive(Defined) data types.

//? To copy the value of one variable to another variable.

/* let a =10;
let b = a;

console.log(`The value of a is = ${a} and value of b is = ${b}`);

a=20;
b=30;

console.log(`The value of a after changes is = ${a} and value of b after changes is = ${b}`); // Due to Different Addresses of both the variable.
 */

//! Call By Reference.
//? Works only with user-defined data-types.

//? To copy one object properties to another object.

/* let obj1 = {
    School:'St.Joseph\'s Academy',
    college:'Information Technology and science'
}
console.log(obj1);

let obj2 = obj1;

console.log(obj2);

let chan = obj2.School = 'Fatima convent school'; // Changes are made to copied object and it changed the main object property also.

console.log(obj1);
console.log(obj2);

console.log(chan); */

//? Changes in both the object simultaneosly makes the problem.

//? Solution for the changing problem.

//! Shallow Copy.
//? -> Spread operator : one by one property of one object access to another object.

/* let obj1 = {
    School:'St.Joseph\'s Academy',
    college:'Information Technology and science'
}

let obj2 = {...obj1};
console.log(obj1);
console.log(obj2);

 /// Making changes normally

let chan = obj1.college = 'IMS college';
console.log(obj1);
console.log(obj2);
 */

//? -> Assign operator : assign one object to another one.

/* let obj1 = {
    School:'St.Joseph\'s Academy',
    college:'Information Technology and science'
}

let obj2 = Object.assign({},obj1);

console.log(obj2);

let chan = obj2.college = 'IMS-college'
console.log(obj1);
console.log(obj2); */

//! Problem in SHALLOW COPY: While accessing the property of nested object.

/* let obj1 = {
    School:'St.Joseph\'s Academy',
    college:'Information Technology and science',
    address:{
        plot:1024,
        city:'GZB',
        state:'UP'
    }
}

console.log(obj1);
console.log(obj1.address);

let obj2 = {...obj1};
console.log(obj2)
console.log(obj2.address);

/// Making chganges 

let chan = obj2.college='IMS';

console.log(obj2.address);

/// Making changes in nested object.

let chan1 = obj2.address.city="Ghaziabad";
console.log(obj1);
console.log(obj1.address); // changed to Ghaziabad

console.log(obj2);
console.log(obj2.address); */ // Chnaged to Ghaziabad


//! Resolution of a Nested problem.

//! Deep copy.
//? JSON: Java script object notation
//? Method:   JSON.Stringify:   (convert whole properties of object to string).
//? Method:   JSON.Parse:   (Convert string propeties to Normal object properties).

//! JSON.Stringify.

/* let obj1 = {
    School:'St.Joseph\'s Academy',
    college:'Information Technology and science',
    address:{
        plot:1024,
        city:'GZB',
        state:'UP'
    }
}

let obj2 = JSON.stringify(obj1);
console.log(obj2); */

//! JSON.parse.

/* let obj1 = {
    School:'St.Joseph\'s Academy',
    college:'Information Technology and science',
    address:{
        plot:1024,
        city:'GZB',
        state:'UP'
    }
}

let obj3 = JSON.parse(JSON.stringify(obj1));

console.log(obj3)
console.log(obj3.address); 

let chan = obj1.address.plot=1000;

console.log(obj1.address);

console.log(obj3.address);
 */

//! Problem : in JSON While apllying function in an object.
/* 
let obj1 = {
    School:'St.Joseph\'s Academy',
    college:'Information Technology and science',
    address: function(){
        let color = 'Red';
        let Name = 'Abhishek';
        console.log(`The name is ${Name} and color is ${color}`);
    }
}

let obj2 = JSON.parse(JSON.stringify(obj1));

console.log(obj2.address()); // Error - is not a function
console.log(obj1.address());
 */

//! Resolution : Lodash 

// let obj2 = .cloneDeep(obj1);