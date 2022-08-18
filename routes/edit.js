//handles initial get for homepage
//handles delete and edit

const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit') //back up twice to get to the root

//add specific routes for specific tasks
router.get('/:id', editController.getEdit) //to edit use unique id
router.get('/remove/:id', editController.deleteTask) 
router.post('/:id', editController.updateTask)

module.exports = router