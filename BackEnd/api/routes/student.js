const express = require('express');
const router = express.Router();
const db = require('../../config/database')
const Student = require('../models/student')


router.get('/', (req,res,next) => {
    Student.findAll()
    .then(student => {
        console.log(student)
      res.sendStatus(200)
    })
    .catch(err => console.log("error", err))
    
    // res.status(200).json({okay:'okay'})

})


router.get('/:id', (req,res,next) => {

    res.status(200).json({firstName:'abimael',lastName:'espinal'})


})


router.post('/student', (req,res,next) => {

    res.status(200).json({message:'Added student successfully',student:req.body})


})

router.delete('/student', (req,res,next) => {
    res.status(200).json({message:"Deleted student successfully", student:req.body})
})

//router.patch('/:productId', (req,res,next) => {

router.patch('/student', (req,res,next) => {
  
        res.status(200).json({message:"Edited student sucessfully", student:req.body})
    });


module.exports = router