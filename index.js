const beli = require('./beli');

let flower = {
  item: 'flower',
  harga: 15000,
  waktu: 1200
}

let permen = {
  item: 'permen',
  harga: 5000,
  waktu: 500
}

let cake = {
  item: 'cake',
  harga: 200000,
  waktu: 1000
}

let pen = {
  item: 'pen',
  harga: 10000,
  waktu: 1500
}

let pencil = {
  item: 'pencil',
  harga: 20000,
  waktu: 200
}

beli(2000000, flower, function(callback1){
  beli(callback1, permen, function(callback2){
    beli(callback2, cake, function(callback3) {
      beli(callback3, pen, function(callback4){
        beli(callback4, pencil, function(callback5){
        console.log(`Sisa uang saya adalah ${callback5}`);
        })
      })
    })
  })
});
