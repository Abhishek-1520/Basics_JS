//! Promises: 
//* Promises handle's the Asynchronous code.(Example - Handle to call back hell).

//? Stages of Promises.
//* Pending-stage           Fulfilled-stage         Rejected-stage

//? Automatically called function of Promises.
//* .then()           .catch()

//* If promise is fulfilled it moves to - .then() function and resolved state.

//* If promises are rejected, it moves to - .catch() function and reject state.

//? .then() function.
//* when promise is fulfilled then() function is automatically called and fetch the fulfilled value.

//? .catch() function.
//* Rejected promise will give error, to handle that error catch function is automatically called.

//* Then again that process will continue.

//!    Syntax:
//!    let prom = new Promise((resolve),(reject) => {
//!          resolve();
//!          reject();    
//!      })

//* Only two parameter can be inserted for the state of promise.

/* let prom = new Promise((resolve,reject)=>{
    reject('Your promise is rejected')
    resolve('Your promise is resolved ')

    //*consuming promise
}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)}) */

//? Using Set_Time_out()

/* const prom = new Promise((res,rej)=>{
    console.log('nice')
    setTimeout(()=>{
        console.log('This is executed after promise execution')
    },2000);

    setTimeout(()=>{
        rej('Your promice  is resolved synchronous order');
    },3000);
    console.log('Hello')
})
prom.then((res)=>{console.log('good',res)}).catch((err)=>{console.log('found',err)}) */

//? Printing results.

/* console.log("Very First output");

let prom = new Promise((res,rej)=>{
    setTimeout(() => {
        console.log(1);
        res('Code is resolved')
        console.log(2)
    },2000);
    console.log(3);
})

prom.then((res)=>{
    console.log(4);
    console.log(res);
    console.log(5);
}).catch((err)=>{console.log('found',err)}) 

setTimeout(()=>{
    console.log(9)
    let pro = new Promise((res,rej)=>{
        res('Code is resolve');
        console.log(6);
    })
    console.log(7)
pro.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err)
})
setTimeout(()=>{console.log(10)},2000)
console.log(8)
},5000) */

/* setTimeout((counter)=>{
    const c = counter;
    let promi = new Promise((res,rej)=>{
        if(c>=5){
            res('Promise resolved');
            console.log(`Your name is ${counter}`);
        } else{
            rej('Enter correct length');
            console.log(counter);
        }
    })
    promi.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
},3000,5) */

//! Call Back Hell
/* 
function one(scd){
    console.log('hello');
    scd();

    function three(frt){
        console.log('bro');
        frt();
    }
    function four(){
        console.log('watsup')
    }
    three(four);
}

function two(){
    console.log('hii')

    function five(sx){
        console.log('added a function')
        sx();
    }

    function six(){
        console.log('new function')
    }
    five(six)
}
one(two) */


/* 
setTimeout((para1)=>{
    console.log(para1);

    setTimeout((para2)=>{
        console.log(para2);

        setTimeout((para3)=>{
            console.log(para3);

            setTimeout((par4)=>{
                let pro = new Promise((res,rej)=>{
                    res('Hello resolved this promise also')
                    
                })
                pro.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
                console.log(par4)
            },2000,'watsup')
        },2000,'bro')
    },2000,'Choudhary')
},2000,'Abhishek') */

//! Practice Questions.
//* 1..
/* const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Set Time out is working now') // Macro Queue
    },2000);
    resolve('Promise is working now') // very First priority outside the block.
}).then((result)=>{console.log(result);}).catch((error)=>{console.log(error);}) */

//* 2..
/* const data = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise is working now') 
        console.log('Set Time out is working now') 
    },2000);
    
}).then((result)=>{console.log(result);}).catch((error)=>{console.log(error);}) */

//* 3..
/* const data = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Set time out resolved now')
    },2000)
    console.log('Synchronous run first')
}).then((res)=>{console.log(res)}) */

//* 4.. Pushed and element into an array..

/* let data = ['Abhishek'];
let funpro = ()=>{
    const prom = new Promise((Added,refused)=>{
        if(data.length>0){
            data.push(parseInt(prompt('Enter the element you want to add')));
            console.log("Your new array element is in a process..please wait");
            setTimeout(()=>{
                    Added("Your promise is working")
                    console.log('The new Data is',data);
            },3000)
        }else{
            refused('Element can\'t be processed');
            console.log('Your value is not pushed in an array')
        }
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
}
console.log(data);
funpro(); */

//! Methods of Promises.

//? Promise.all(): It can store multiple promises and check those promises at a time.
//?                It removes the complexity  of writting then and catch function again and again.
//?                If any one promise is rejected than no other promise work here only catch function will be execited.


// let prom1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         a = 20;
//         console.log("This is first promise");
//         res('Resolved bro');
//     },2000)
// })

// let prom2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         b = 30;
//         console.log('Hello guys, This is second promise');
//         rej('Rejected yarr');
//     },2000)
// })

// let prom3 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         c = 40;
//         console.log('Hello sir, this is third promise')
//         res('Resolved sir')
//     }, 2000);
// })

// Promise.all([prom1,prom2,prom3]).then((res)=>{
//     console.log(res);
//     let d = a+b+c;
//     console.log(d)
// }).catch((err)=>{
//     console.log(err)
// })

//* In case of rejecting a promise:

// let prom1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         a = 20;
//         //console.log("This is first promise");
//         res('Resolved bro');
//     },2000)
// })

// let prom2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         b = 30;
//         //console.log('Hello guys, This is second promise');
//         rej('Rejected yarr');
//     },2000)
// })

// let prom3 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         c = 40;
//         //console.log('Hello sir, this is third promise')
//         res('Resolved sir')
//     }, 2000);
// })

// Promise.all([prom1,prom2,prom3]).then((res)=>{
//     console.log(res);
//     let d = a+b+c;
//     console.log(d)
// }).catch((err)=>{
//     console.log('so this is',err)
// })

//? promise.allsettled([]): It waits for all promises to fulfilled or rejected, and returns the array 
//?                         In which object is describing about promise status, value, error-reason.

// const prom = new Promise((res,rej)=>{
//     console.log("The first promise is resolved");
//     setTimeout(()=>{res('Reseoved First')},3000);
// })

// const prom_1 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log('Second promise starts working');
//         rej('Promise rejected');
//         if(0){console.log(True)};
//     }, 2000);
// })

// Promise.allSettled([prom,prom_1]).then((result)=>{
//     console.log('Resolved promises are here',result);
// }).catch((error)=>{
//     console.log('Error found here ', error);
// })


//? promise.any([]): It will only return the resolved promise with less time and skip the rejected promise.

// const prom1 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log('Hello first working')
//         rej('Promise rejected')
//     }, 2000);
// })

// const prom2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log('Hello second promise');
//         res('Bro resolved in 4 sec')
//     }, 4000);
// })

// const prom3 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log('Hello third promise')
//         rej('Rejected but')
//     }, 1000);
// })

// Promise.any([prom1,prom2,prom3]).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log('error',err)
// })

//? Promise.race([]): When you only want result from the firstly resolved promise no mattter its rejected or not.

// const prom1 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         //console.log('Hello first working')
//         rej('first Promise rejected')
//     }, 9000);
// })

// const prom2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         //console.log('Hello second promise');
//         res('Bro resolved second')
//     }, 2000);
// })

// const prom3 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         //console.log('Hello third promise')
//         rej('Rejected but third')
//     }, 3000);
// })

// Promise.race([prom1,prom2,prom3]).then((result)=>{
//     console.log(result)
// }).catch((erre)=>{
//     console.log(erre)
// })

//! Writting a promise in different ways.

// let prom_fun = (mess,value)=>{
//     return function(res,rej){
//         setTimeout(() => {
//             console.log(`The ${mess} is working and value is ${value}`);
//         }, 3000);
//         res('promise ressolved here')
//     }
// }

// const prom = new Promise(prom_fun('first promise',34))
// const prom1 = new Promise(prom_fun('second promise',30))

// Promise.all([prom,prom1]).then((resu)=>{
//     console.log(resu)
// }).catch((err)=>{
//     console.log(err)
// })

//! promise.any() shorter syntax.

// let promfun= (status)=>{
//     return (resolve,rejected)=>{
//             setTimeout(() => {
//                 if (status == 'first promise'){
//                     console.log(status);
//                     resolve('Promise resloved');
//                 }else {
//                     console.log("Enter correct value in status." , status)
//                     rejected('Here your promises is rejected.')
//                 }      
//             }, 1000); 
//     }
// }


// let prom1 = new Promise(promfun('first promise'))
// let prom2 = new Promise(promfun('second promise'))

// Promise.any([prom1,prom2]).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err)
// })
