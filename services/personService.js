const PersonModel = require('../models/PersonModel')

// Find all users
const getAllPersons = async function(req,res){
    const personList = await PersonModel.findAll();
    res.status(200).json(personList);
}

const getPersonByID = async function(req,res){
    const person = await PersonModel.findByPk(req.params.id);
    if(!person){
        return res.status(404).json({status: 'Not Found'});
    }
    res.status(200).json(person);
}

module.exports = {
    getAllPersons,
    getPersonByID
}