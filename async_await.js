//! async: Is a keyword, we can use it with function or a method to return promise.
//* To Handle more than one promise we have to use .then function again and again.
//* async removes the complexity of using .then function.

//! await: also a keyword, we can use it on any line of async function only, it let the promise to wait for completion.
//* used only with-in a async function.

//? Problem for handling a promise.

// let prom = new Promise((resolve,reject)=>{
//     console.log('Hello..1');
//     resolve("hello resolved");
// })
// prom.then((result)=>{
//     //console.log(result);
//     return result;
// }).then((res)=>{
//     return res;
// }).then((re)=>{
//     console.log("Process continues")
//     console.log('Promise handled: ',re)
// })


//? Using async function to handle this problem of promises.

// let prom = new Promise((resolve, reject) => {
//     console.log('This is first promise');
//     resolve('Resolved now ');
// })

// async function promise(){
//     const hand = prom;
//     console.log(hand);
//     return hand;
// }
// console.log(promise())

// async function demo(c){
    // try{
    //     console.log(a+b)
    //     console.log(a)
    //     console.log(b)
    // }catch(err){
    //     console.log(err)
    // }
//     var a =10;
//     console.log(a);
//     var b =20;
//     return a+b+c;
// }
// demo();
// console.log(demo(100))

//? await : executing the await line first and directly got exit from the function and run outside code.
//console.log('started')
// async function dem(){
//     await console.log('Hello');
//     console.log('Hyy..');
//     console.log(20+30);
//     console.log('Updates')
//     console.log('Abhishek');
//     console.log('Choudhary')
//     console.log(100+100)
// }
// dem();
// console.log('started from down');

// let a = 'Ram is a good boy.';
// console.log(a)


// const promi = new Promise((resolve, reject) => {
//     name = prompt('Enter your name here')
//     if (name ===  'Abhishek'){
//         resolve(`${name} Your promise resolved.`)
//     }else {
//         reject(`${name} your promise rejected.`)
//         console.log('See your entered name.')
//     }
// })


// const promss = new Promise((resolve, reject) => {
//     name = prompt('Enter your name here')
//     if (name ===  'Abhishek'){
//         resolve(`${name} Your promise resolved.`)
//     }else {
//         reject(`${name} your promise rejected.`)
//         console.log('See your entered name.')
//     }
// })

// const prom = async (name)=>{
//     const call1 = await promi;
//     const a = promss;
//  console.log(`${name} Your async function started from here please wait..`)
//      await console.log(name)
//     console.log(a)
//      console.log(call1);
//     console.log('hello')
// }
// prom(name);
//  console.log('Synchronous but outside the function after await')

// let newdata = (res,rej)=>{
//     naam = prompt('Enter your name here');
//     res(`Promise got resolved ${naam}`);
// }

// let proms = new Promise(newdata);

// let call = async ()=>{
//     const a = await proms;
//     console.log(a)
// }

// call()
// console.log('After initialzation of promise  ')