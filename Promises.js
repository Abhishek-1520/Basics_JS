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