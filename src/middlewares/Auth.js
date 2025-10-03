const adminAuth = (req, res, next) => {
    const token = 'axyz';
    const isAdminAuthenticated = token === 'xyz';
    if(!isAdminAuthenticated){
        res.status(401).send("Admin not Authenticated");
    }
    else{
        next();
    }
};


const userAuth = (req, res, next) => {
    const token = 'abc';
    const isUserAuthenticated = token === "abcd";
    if(!isUserAuthenticated){
        res.status(401).send("User not authenticated");
    }
    else{
        next();
    }
};

module.exports = {
    adminAuth,
    userAuth
};