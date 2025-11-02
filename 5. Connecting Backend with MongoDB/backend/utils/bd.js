const mongoose = require('mongoose')

const URI = 'mongodb+srv://quickGyan:quickGyan2006@cluster0.rs6qx7q.mongodb.net/quickGyanDB?retryWrites=true&w=majority&appName=Cluster0'

// mongoose.connect(URI)


const connectDB = async ()=>{
    try{
        await mongoose.connect(URI)
        console.log('Connection successfully to DB with quickGyan DB')
    }
    catch(error){
        console.error(' data connection failed')
        process.exit(0);
    }
}

module.exports = connectDB