const jwt = require("jsonwebtoken");

const auth = async(req,res,next) => {
    try{
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401); // Unauthorized
    
        jwt.verify(token, "passwordKey", (err, user) => {
            if (err) return res.sendStatus(403); // Forbidden
            req.user = user;
            next(); // Pass the request to the next middleware
        });
    }
    catch (e) {
        res.status(500).json({error: e.message });
    }
}

module.exports = auth;