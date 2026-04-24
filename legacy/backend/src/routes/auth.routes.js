const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware')
const {registerController, loginController, logoutController} = require('../controllers/auth.controller')

router.post('/register',registerController)
router.post('/login', loginController )
router.post('/logout' , authMiddleware , logoutController)
router.get('/me' , authMiddleware , (req,res)=>{
    return res.status(200).json({user : req.user})
})




module.exports = router;
