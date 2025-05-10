const { validationResult } = require("express-validator");
const { passport, authenticateUser } = require("../../config/passport");
const { validateLogin } = require("../../validation/loginValidator");


exports.loginUser = [
    validateLogin,
    async(req, res, next) => {
        try {
            const { username, password} = req.body
            // console.log(username, password)
            const { user, access, refresh } = await authenticateUser(username, password, req)

            
            const hash = await argon.hash(req.fingerprint)
            await prisma.user.update({
                where: {
                    id: user.id
                },
                data: {
                    fingerprint: hash
                }
            })

            res.cookie("access", access, {
              httpOnly: true, 
              secure: true, 
              maxAge: 15 * 60 * 1000, 
              sameSite: "Strict",
              path: "/",
              domain: ".hallowedvisions.com"
          });
          
          res.cookie("refresh", refresh, {
              httpOnly: true,      
              secure: true,
              maxAge: 7 * 24 * 60 * 60 * 1000, 
              sameSite: "Strict", 
              path: "/",
              domain: ".hallowedvisions.com"
          });



            return res.json({user})
        } catch(e) {
            return res.status(401).json({error: "Incorrect username or password"})
        }
    }
]