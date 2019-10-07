// Promise.race()
// Kendisine verilen promise iterable'ından 
// ilk önce resolve/reject olanı döndürür.
// Resolve veya reject olması farketmez,
// buna göre 2 adet fonksiyon parametre verilebilir:
// ilki resolve, ikincisi reject durumu için.
// Aşağıda görülebileceği üzere ilk resolve
// olan Promise p1 olduğundan bu promise
// dönecek

const p1 = new Promise( function(resolve, reject) {
    setTimeout( () => {
      resolve( "2quick" );
    }, 1000);
  });
  
  const p2 = new Promise( function(resolve, reject) {
    setTimeout( () => {
      resolve( [ 1, 2, 3] );
    }, 4000);
  });
  
  
  Promise.race([p1, p2]).then((value) => {
    // 1 seconds later...
    console.log(value); // value: "2quick"
  });