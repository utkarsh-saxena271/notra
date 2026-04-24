
// const userModel = require('../models/user.model')
// const jwt = require('jsonwebtoken')


// async function authUser(req,res,next){
//     const {token} = req.cookies;

//     if(!token){
//         return res.status(401).json({
//             message: "unauthorized"
//         })
//     }
//     try{
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await userModel.findById(decoded.id)
//         req.user = user
//         next()

//     }catch(err){
//         res.status(401).json({
//             message: "unauthorized"
//         })
//     }

// }


// module.exports = {
//     authUser
// };
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

const authMiddleware = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(401).json({ message: "No token provided" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded?.id) return res.status(401).json({ message: "Invalid token" });

        const user = await userModel.findById(decoded.id).select("-password");
        if (!user) return res.status(401).json({ message: "User not found" });

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: `Auth failed: ${error.message}` });
    }
};

module.exports = authMiddleware;