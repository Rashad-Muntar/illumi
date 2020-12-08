const middlwareObj = {}

middlwareObj.isloggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    }else{
        res.redirect("/authentic/admin")
    }
}

module.exports = middlwareObj