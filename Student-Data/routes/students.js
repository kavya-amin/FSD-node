const {Student, validate} = require('../models/student'); 
const {Course} = require('../models/course');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const students = await Student.find().sort('studentName');
  res.send(students);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findById(req.body.courseId);
  if (!course) return res.status(400).send('Invalid course.');

  let student = new Student({ 
    studentName: req.body.studentName,
    course: {
      _id: course._id,
      name: course.name
    }
  })
  student = await Student.save();
  
  res.send(Student);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findById(req.body.courseId);
  if (!course) return res.status(400).send('Invalid course.');

  const student = await Student.findByIdAndUpdate(req.params.id,
    { 
      studentName: req.body.studentName,
      course: {
        _id: course._id,
        name: course.name
      }
    }, { new: true });

  if (!student) return res.status(404).send('The student with the given ID was not found.');
  
  res.send(student);
});

router.delete('/:id', async (req, res) => {
  const student = await Student.findByIdAndRemove(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) return res.status(404).send('The student with the given ID was not found.');

  res.send(student);
});

module.exports = router; 