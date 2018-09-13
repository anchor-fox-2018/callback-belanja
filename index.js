const beli = require("./beli.js");

beli(40000, { item: "ikan", harga: 200, waktu: 1000 }, function callbackResult(cb) {
    beli(cb, { item: "kura-kura", harga: 100, waktu: 1000 }, function callbackResult(cb) {
        beli(cb, { item: "tuna", harga: 300, waktu: 2500 }, function callbackResult(cb) {
            beli(cb, { item: "tongkol", harga: 250, waktu: 2000 }, function callbackResult(cb) {
                beli(cb, { item: "udang", harga: 100, waktu: 5000 }, function callbackResult() {

                });
            });
        })
    })
});


