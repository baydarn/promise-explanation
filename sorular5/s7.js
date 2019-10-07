// fetch() fonksiyonu yardımı ile
// server'a veri gönderebilir
// ya da server'dan veri alabiliriz
// fetch, node.js'te YOKTUR, npm'den yüklenebilir
// Bu sebepten html içinde browser'da test ettim

async function getData() {
    const response = await fetch("./data.json");
    const myJson = await response.json();
    return Promise.resolve(JSON.stringify(myJson));
}

getData().then( json => console.log(json));
