export const login = async (req,res) => {
    try{
        res.send('login page');
    }
    catch(error){
        console.error(error)
    }
};

// module.exports = login;