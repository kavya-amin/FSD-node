const mongoose= require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/course-information",{useUnifiedTopology:true, useNewUrlParser:true}).then(()=>{
    console.log('connected to mongo')
}).catch(err=>{
    console.log("Error in connection",err);
})