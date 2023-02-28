const { User } = require('../models/index')

function findUserById(req, res) {
    User.findOne({
        where: {id: req.params.id}
    })
    .then(result => {
        res.status(200).json({
            status: 200,
            message: 'success get a user data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

function findAllUser(req, res) {
    User.findAll()
    .then(result => {
        res.status(200).json({
            status: 200,
            message: 'success get all user data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

function updateUserById(req, res) {
    User.update({
        fullname: req.body.fullname,
        username: req.body.username,
        level: req.body.level
    }, {
        where: {id: req.params.id}
    }).then(result => {
        res.status(200).json({
            status: 200,
            message: 'success update a user data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

function deleteUserById(req, res) {
    User.destroy({
        where: {id: req.params.id}
    }).then(result => {
        res.status(200).json({
            status: 200,
            message: 'success delete a user data',
            data: result
        })
    }).catch(err => res.status(500).send(err))
}

module.exports = {
    findUserById,
    findAllUser,
    updateUserById,
    deleteUserById
}