const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const StudentRoute = require('./api/routes/students')


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use((req,res,next) => {
    /*
    //This header allows access to only the specified client
    // res.header('Access-Control-Allow-Origin', 'http:/my-cool-page.com');
    */
    //This header allows access to every client domain
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});


app.use('/students', StudentRoute)



module.exports = app;