const home = async (req, res) => {
    try {
        res.send("hello home")
    }
    catch (error) {
        console.log(error)
    }
};

module.exports =  home ;