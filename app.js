const express = require('express');
const sequelize = require('./db/connect')
const notFound = require('./middleware/not-found')

const personController = require('./controllers/personController')

const app = express()

app.use(express.static('./public'));

app.use('/api/person', personController)

app.use(notFound);

const start = async () =>{
    try{
        await sequelize.authenticate()
        app.listen(5000, () => console.log('Server started'))
    } catch(err){
        console.log('failed to connect to database: ' + err)
    }
}

start();


