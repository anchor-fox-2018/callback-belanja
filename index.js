const beli = require('./beli.js');

beli(100000, {item: "Voucher Game", harga: 50000, waktu: 5000}, function (callbackResult) {
     beli(callbackResult, {item: "Game Stick", harga: 10000, waktu: 4000},function(callbackResult){
         beli(callbackResult, {item: "Kaos Gaming", harga: 15000, waktu: 2000},function(callbackResult){
             beli(callbackResult, {item: "Cable Replacement", harga: 7000, waktu: 3000},function(callbackResult){
                 beli(callbackResult, {item: "Hard Case", harga: 15000, waktu: 5000},function(callbackResult){
                      beli(callbackResult, {item: "Charger Hp", harga: 15000, waktu: 7000}, function(){
                          console.log("Wahhh...Padahal Itu Yang Penting!!!")
                      })
                 })
             })
         })
     })})

