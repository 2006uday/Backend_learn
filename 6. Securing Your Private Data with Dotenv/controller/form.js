const form = async (req, res)=> {
    try{
        res.send('form page.')
    }
    catch(error){
        console.error("connect  failed")
    }
}

module.exports = form;