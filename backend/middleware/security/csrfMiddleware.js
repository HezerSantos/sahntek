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

    const __HostCsrfToken = jwt.sign(spayload, XFRS_SECRET, { expiresIn: '5m'})
    const __HostRefreshCsrfToken = jwt.sign(rpayload, RFRS_SECRET, { expiresIn: '5m'})

    
    res.cookie("__Host.csrf-token", __HostCsrfToken, {
        httpOnly: false, 
        secure: true, 
        maxAge: 5 * 1000 * 60, 
        sameSite: "None",
        path: "/",
        // domain: ".hallowedvisions.com"
    })

    res.cookie("__Host.refresh-csrf-token", __HostRefreshCsrfToken, {
        httpOnly: false, 
        secure: true, 
        maxAge: 5 * 1000 * 60, 
        sameSite: "None",
        path: "/",
        // domain: ".hallowedvisions.com"
    })

    res.status(200).send()
}

module.exports= {csrf}