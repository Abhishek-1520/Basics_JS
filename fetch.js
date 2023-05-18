//* A fetch() is a method  : which is used to fetching a resource from the server. And always returns a promises. 

//* A fetch can also use to insert, update and delete the data.

// fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
//     return res.json();
// }).then((resp)=>{
//     console.log(resp);
// })

//* Itirating the elements.

// fetch("https://jsonplaceholder.typicode.com/users/8")
// .then((response)=>{
//     console.log('please wait..')
//     return response.json();
// }).then((result)=>{
//     console.log('Fetching result');
//     console.log(result);
//     document.write(result.name,'<br>')
//     document.write(result.email,'<br>')
//     document.write(result.username)
// })

//* Itirating the elements with loop and async function..

// const arr = async ()=>{
//     response =  await fetch("https://jsonplaceholder.typicode.com/users/8");
//     get_result = response.json();

//     console.log('Got Result here')

//     return get_result
// }
// arr().then((got)=>{
//     console.log(got);
// }).catch((err)=>{
//     console.log(err)
// })


//* Using the error handling (try and catch)..


// let func = async ()=>{
//         try{
//             let Read = await fetch("https://jsonplaceholder.typicode.com/users/8");
//             const response = Read.json();
//             console.log("Data fetched Please wait ..");
//             return response;
//         }catch(Error){
//                 console.log("Error:",Error)
//         }
        
// }
// func().then((Fetch)=>{
//     console.log(Fetch)
// }).then((prom)=>{
//     console.log(prom)
// })


//* To update the Data on the server..
//? Insert Data     Update Data     Delete Data 

//! Insert Data:

//* Method will be Post for inserting 

//* Body Contains : formdata, Json Data, Text..

//* Header contains the content type.

// const obj = {
//     Id: 01,
//     FullName:'Abhishek',
//     LastName: 'Choudhary'
// }

// fetch("https://jsonplaceholder.typicode.com/users/",{
//     method: "Post",
//     body: JSON.stringify(obj),
//     headers:{
//         'content-type':'application/JSON'
//     }
// })
// .then((Response)=>{
//     return Response.json();
// }).then((Posted)=>{
//     console.log(Posted)
// })


//! Updating a Data to server.

//? Method: PUT 
//? Body: Contains object data.
//? Header: Application data.

// let updobj = {
//     name : 'Aashika',
//     class : "Blue",
//     Assets : null
// }


// fetch("https://jsonplaceholder.typicode.com/users/8",{
//     method: "put",
//     body: JSON.stringify(updobj),
//     headers:{
//         'content-Type':'application/JSON'
//     }
// })
// .then((res)=>{
//     return res.json();
// }).then((err)=>{
//     console.log(err)
// })

//! Delete the Data from the server.

// fetch("https://jsonplaceholder.typicode.com/users/8",{
//     method:'Delete'
// })
// .then((res)=>{
//     res.json();
// }).then((del)=>{
//     console.log(del)
// })