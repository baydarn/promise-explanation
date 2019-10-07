// var test = new Promise( (resolve, reject) => {
//     // setTimeout(() => resolve('test'), 3000)
//   setTimeout(() => {
//     resolve(new Promise( (res,rej) => {
//       setTimeout(()=> res('test2'), 1000);
//     }))
//   }, 1000)
//  });
//  test.then((res) => {
//      return res
//  }).then((res2)=>console.log(res2));

var test = new Promise( (resolve, reject) => {
    // setTimeout(() => resolve('test'), 3000)
  setTimeout(() => {
    resolve(new Promise( (res,rej) => {
      setTimeout(()=> res('test2'), 1000);
    }))
  }, 1000)
 });
 test.then((res2)=>console.log(res2));