const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ap22:Ani2022@cluster0.ppsiosd.mongodb.net/todo');

app.get('/', (req, res) => {
    userModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

app.post('/createUser', (req, res) => {
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;

    userModel.findById(id)
        .then(users => res.json(users))
        .catch(err => res.json(err));
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;

    userModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        title: req.body.title,
        description: req.body.description
    })
        .then(users => res.json(users))
        .catch(err => res.json(err));
})


app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;

    userModel.findByIdAndDelete({_id:id})
        .then(users => res.json(users))
        .catch(err => res.json(err));
})


app.listen(3001, () => {
    console.log("app listening on port ")
})