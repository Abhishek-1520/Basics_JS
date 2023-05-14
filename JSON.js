//* JSON (Java Script Object Notation).
//* File extension (.json)

//* JSON is a Text format data, used for storing and transporting it.
//* JSON data is light-weight and can be access by all languages also.(Language Independent).
//* JSON is only a format not a particular topic of any language.

//? Key and value pair will be written in fixed double quotes format.
//* values: Number(23)  string("Hello")     Boolean(true/false)     Null    Array["",{},12]         object{}

//* Data can be fetched and can be send to server.

//! When data is Fetched from server to use (JSON.parse)...

// let data = `{
//     "name":"Abhishek",
//     "age":34,
//     "Address":{
//         "city":"Delhi",
//         "Pin":2001001
//     }
// }`

// let dataobj = JSON.parse(data);
// console.log(dataobj);
// console.log(dataobj['name']);
// console.log(dataobj['age']);
// console.log(dataobj['Address']['Pin'])


//! When Data is updating to server. (JSON.stringify)...

// let data = {
//     name:'Abhishek',
//     age:[12,21,23,{name:'Abhishek'}],
//     address:{
//         city:'delhi',
//         pin:201001
//     }
// }

// let JSONDATA = JSON.stringify(data);

// console.log(JSONDATA)