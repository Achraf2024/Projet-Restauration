/**
* this configuration for connect our application with mongodb
*/
const mongoose = require('mongoose')
let db = mongoose.connect('mongodb+srv://eyagd:eyagd@cluster0.3uldv5h.mongodb.net/test',{useUnifiedTypology:true, useNewUrlParser: true } , (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log('connected...')
    }
})
