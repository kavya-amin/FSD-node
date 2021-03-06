const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min: 5,
        max: 50
    }
});

const Course = mongoose.model('Course', courseSchema);

function validateCourse(course) {
    const schema = {
      name: Joi.string().min(3).required()
    };
  
    return Joi.validate(course, schema);
  }
  
  exports.courseSchema = courseSchema;
  exports.Course = Course; 
  exports.validate = validateCourse;