const jwt = require("jsonwebtoken");
const User = require("../models/user")

const admin = async(req,res,next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401); // Unauthorized
    
        jwt.verify(token, "passwordKey", (err, user) => {
            if (err) return res.sendStatus(403); // Forbidden
            req.user = user;
            
            // Check if user has admin role
            if (user.type !== 'admin') {
                return res.status(403).json({ msg: "Access denied. Admin authorization required" });
            }

            next(); // Pass the request to the next middleware
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
    

}

module.exports = admin;