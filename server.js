//declare initial variables
const express = require('express')
const app = express()
const PORT = 9500
const connectDB = require('./config/database') //require database in config folder
const homeRoutes = require('./routes/home')
const editRoutes = require('./routes/edit')
require('dotenv').config({path: './config/.env'}) //require dotenv
//add model variables
//const TodoTask = require('./models/todotask')

//connecting to mongodb thru mongoose
connectDB()

//middlewares
app.set('view engine', 'ejs') //using ejs(templating language) to spit out html
app.use(express.static('public')) //letting express() find files in the public folder
app.use(express.urlencoded({extended: true})) //url parser for express() help validate the info being passed back and forth(the right kind of data). 
//extended allows us to pass more complex things such as arrays

//routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)


//listening server
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
