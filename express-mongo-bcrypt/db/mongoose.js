const mongoose= require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test-manager-api",{useUnifiedTopology:true, useCreateIndex: true,
useFindAndModify: false, useNewUrlParser:true}).then(()=>{
    console.log('connected to mongo')
}).catch(err=>{
    console.log("Error in connection",err);
})