const Joi = require('joi');
const mongoose = require('mongoose');
const {courseSchema} = require('./course');

const Student = mongoose.model('Student', new mongoose.Schema({
    studentName: {
      type: String,
      required: true,
      trim: true, 
      minlength: 5,
      maxlength: 255
    },
    course: { 
      type: courseSchema,  
      required: true
    },
    admissionDate: { 
        type: Date, 
        required: true,
        default: Date.now
    }
  }));

  function validateStudent(student) {
    const schema = {
      studentName: Joi.string().min(3).required()
    };
  
    return Joi.validate(student, schema);
  }

exports.Student = Student; 
exports.validate = validateStudent;