const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const XFRS_SECRET = process.env.XFRS_SECRET
const RFRS_SECRET = process.env.RFRS_SECRET

const csrf = async(req, res, next) => {
    const crossSurf = crypto.randomBytes(32).toString('hex');
    const refreshSurf = crypto.randomBytes(32).toString('hex');
    const spayload = {
        csrf: crossSurf,
    }

    const rpayload = {
        csrf: refreshSurf
    }

    const __SecureCsrfToken = jwt.sign(spayload, XFRS_SECRET, { expiresIn: '5m'})
    const __SecureRefreshCsrfToken = jwt.sign(rpayload, RFRS_SECRET, { expiresIn: '5m'})

    
    res.cookie("__Secure.csrf-token", __SecureCsrfToken, {
        httpOnly: false, 
        secure: true, 
        maxAge: 5 * 1000 * 60, 
        sameSite: "None",
        path: "/",
        domain: process.env.NODE_ENV === "production"? ".hallowedvisions.com" : ""
    })

    res.cookie("__Secure.refresh-csrf-token", __SecureRefreshCsrfToken, {
        httpOnly: false, 
        secure: true, 
        maxAge: 5 * 1000 * 60, 
        sameSite: "None",
        path: "/",
        domain: process.env.NODE_ENV === "production"? ".hallowedvisions.com" : ""
    })

    res.status(200).send()
}

module.exports= {csrf}