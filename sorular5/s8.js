// async fonksiyonlar yardımıyla senkronize gibi gözüken
// ama aslında promise'ler üzerine kurulu asenkron bir
// sistem kurabiliriz.
// Aynı etkiyi promise'ler ve generator'ları birarada
// kullanarak da yakalayabiliriz.
// async fonksiyonlar daima bir Promise döndürür!

// chain'li örnek:
async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();

    data = data.map(user => user.username);

    console.log(data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');
// ["Bret", "Antonette", "Samantha", "Karianne", "Kamren", "Leopoldo_Corkery", "Elwyn.Skiles", "Maxime_Nienow", "Delphine", "Moriah.Stanton"]

// basit örnek:
async function f() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; 
    console.log(result); // "done!"
}

f();
