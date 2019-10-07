// Promise.all, kendine verilen bütün promise'lerin resolve
// veya reject olmasını bekler.

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 resolves in 2s"), 2000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 resolves in 1s"), 1000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 resolves in 3s"), 3000);
})

// eğer herhangi bir promise reject olursa,
// Promise.all durur ve o ana kadar biriken result'ları döndürür
Promise.all( [p1, p2, p3] ).then ( (values) => {
    console.log("3 seconds have passed");
    values.forEach ( (elem) => console.log(elem));
} )