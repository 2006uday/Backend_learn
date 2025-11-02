const register = async (req , res) => {
    try{
        res.send('<h1>Register page.</h1>')
    }
    catch(error){
        console.log(error)
    }
}

module.exports = register