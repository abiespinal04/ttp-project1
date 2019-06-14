const Sequelize = require('sequelize')
const db = require('../../config/database')

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
       
    },
    lastName: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    EMPID: {
        type: Sequelize.INTEGER
    },
    imageURL: {
        type: Sequelize.INTEGER
    }

})

module.exports = Student