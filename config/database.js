const mongoose = require('mongoose')


//connect to mongoDB
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_CONNECT)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
} 

module.exports = connectDB //export database