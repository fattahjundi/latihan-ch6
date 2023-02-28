const express = require('express')
const router = express.Router()
const { findUserById, 
        findAllUser, 
        updateUserById,
        deleteUserById } = require('../controllers/userController')

router.get('/:id', findUserById)
router.get('/', findAllUser)
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById)

module.exports = router