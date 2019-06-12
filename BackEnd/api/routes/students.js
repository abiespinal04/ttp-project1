const express = require('express');
const router = express.Router();



router.get('/', (req,res,next) => {

    res.status(200).json({firstName:'abimael',lastName:'espinal'})


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