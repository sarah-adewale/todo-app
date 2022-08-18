//handles initial get for homepage
//handles post

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home') //back up twice to get to the root
// const editController = require('../controllers/edit')

//add specific routes for specific tasks
router.get('/', homeController.getIndex)
router.post('/', homeController.createTask)

module.exports = router