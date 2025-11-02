const login = async (req, res) => {
    try {
        res.send('<h1>login page.</h1>')
    }
    catch (error) {
        console.log(error)
    }
}

const LoginDetail = async (req, res) => {
    try {
        res.json({
            "name": "uday",
            "age" : 4
        })
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports = { login , LoginDetail}