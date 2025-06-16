const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { throwError } = require('../../helpers/errorHelper')
require('dotenv').config();
const XFRS_SECRET = process.env.XFRS_SECRET

  const compare  = (token, header) => {
    const { csrf } = jwt.verify(token, XFRS_SECRET)
    console.log("cookie", csrf)
    console.log("header", header)
    return csrf === header
  }


exports.validateCsrf = (req, res, next) => {
    try{
        // console.log(req.cookies)
        const csrfToken = req.cookies[`__Host.csrf-token`]
        // console.log("header", req.headers.csrftoken)
        const headerToken = req.headers.csrftoken
        
        
        if(!headerToken){
            console.log("Rejected", req.method, req.originalUrl)
            throwError("CSRF missing", 403, ['403 Forbidden'])
        }
        
        const match = compare(csrfToken, headerToken)
        // console.log(match)
        if(!match){
            console.log("Rejected", req.method, req.originalUrl)
            throwError("CSRF token invalid or missing", 403, ['403 Forbidden'])
        }
    
        const crossSurf = crypto.randomBytes(32).toString('hex');
        const spayload = {
            csrf: crossSurf,
        }
    
        const __HostCsrfToken = jwt.sign(spayload, XFRS_SECRET, { expiresIn: '5m'})
    
    
        
        res.cookie(`__Host.csrf-token`, __HostCsrfToken, {
            httpOnly: false, 
            secure: true, 
            maxAge: 60 * 1000 * 5, 
            sameSite: "None",
            path: "/",
            domain: "hallowedvisions.com"
        })
        // console.log("Validated", req.method, req.originalUrl)
        next()
    } catch(error){
        next(error)
    }
}