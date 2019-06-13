const express = require('express');
const router = express.Router();
const db = require('../../config/database')
const Campus = require('../models/campus')


router.get('/', (req, res, next) => {
    Campus.findAll()
        .then(campus => {
            console.log(campus)
            res.status(200).json({ campus })
        })
        .catch(err => console.log("error", err))
})


router.post('/addCampus', (req, res, next) => {

    campusName = req.body.campusName;
    studentCount = req.body.studentCount,
        description = req.body.description,

        Campus.create({
            campusName,
            studentCount,
            description
        })
            .then(campus => {
                res.status(200).json(campus)
            })
            .catch(err => {
                console.log(err)
                res.status(404).json({ message: 'Error at addStudent route' })
            })



})

router.get('/:id', (req, res, next) => {

    res.status(200).json({ firstName: 'abimael', lastName: 'espinal' })


})


router.post('/student', (req, res, next) => {

    res.status(200).json({ message: 'Added student successfully', student: req.body })


})

router.delete('/:campusId', (req, res, next) => {
    const campusID = req.params.campusId
    Campus.destroy({
        where: {
            id: campusID
        }
    }).then(campusID => res.status(200).json(campusID))
        .catch(err => console.log("DELETE STUDDENT ERROR:", err))

})

router.patch('/editCampus', (req, res, next) => {

    const newCampus = req.body
    const campusID = newCampus.id
    const campusName = newCampus.campusName
    const studentCount = newStudent.studentCount
    const description = newStudent.description

    // console.log("BACKENNNNNNNNND", newStudent)
    Campus.update(
        {
            campusName,
            studentCount,
            description
        },

        { where: { id: campusID } }
    ).then((campus) => res.status(200).json(campus))
        .catch(err => console.log("DELETE STUDDENT ERROR:", err))

})


module.exports = router