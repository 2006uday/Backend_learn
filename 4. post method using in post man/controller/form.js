const loginForm = async (req,res) => {
    try{
        res.json({
            message : req.body
        })
    }
    catch(error){
        console.log(error)
    }
}

module.exports = { loginForm }