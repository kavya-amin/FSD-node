const mongoose= require('mongoose');
require('./connection');
async function createCourse(){
const courseSchema= new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    price:Number,
    isPublished:Boolean
});

const Course=mongoose.model('Course',courseSchema);
const course= new Course({
    name:'Pro Spring',
    author:'Rod Johnson',
    tags:['Spring', 'Middleware'],
    price:15,
    isPublished:true
});

course.save().then(()=>{
    console.log('record inserted...');
}).catch(err=>{
    console.log(err);
});
}
createCourse();