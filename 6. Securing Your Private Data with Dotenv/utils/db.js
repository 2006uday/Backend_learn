const mongoose  = require('mongoose')


const URI = process.env.MONGO_URI;

const connectDb = async () => {
    try {

        await mongoose.connect(URI);
        console.log("connection successfull to DB");
    }
    catch(error){
        console.error("atabase connection failed");
        process.exit(0);
    }
}

module.exports = connectDb 