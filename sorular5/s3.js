let p = new Promise( (resolve, reject) => {
    setTimeout( () => { resolve("done in 1s"); }, 1000 );
});

p.then( msg => console.log(msg));

// ya da

new Promise( (resolve, reject) => {
    setTimeout( () => {reject("another promise rejects in 3s")}, 3000 )
}).catch( err => console.log(err));