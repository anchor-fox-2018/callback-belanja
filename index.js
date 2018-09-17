const beli = require('./beli')

// console.log(beli);
// beli(uang, obj, cb);

beli(20000, {item:"sawah", price: 30, time: 400}, function (cb) {
    beli(cb, {item: "thruster", price: 11, time: 320}, function (cb) {
        beli(cb, {item: "haptic glove", price: 450, time: 12}, function(cb) {
            beli(cb, {item: "mason jar with a wine stem and a handle", price: 4500, time: 200}, function(cb) {
                beli(cb, {item: "sumpit kertas", price: 892, time: 100}, function(cb) {
                    beli(cb, {item: "yeezy kw", price: 66, time: 11}, function(cb) {
                        console.log(`sisa: $${cb}`);
                    })
                })
            })
        })
    })
})