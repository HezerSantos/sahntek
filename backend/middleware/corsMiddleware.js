const cors = require("cors");
require('dotenv').config()
const allowedOrigins = [
  "http://localhost:5173", 
  "http://127.0.0.1:5173", 
  "https://sahntek.hallowedvisions.com"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    } 

    if(allowedOrigins.indexOf(origin) !== -1){
      return callback(null, true)
    }else {
      return callback(new Error("CORS not allowed for this origin"), false);
    }
  
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie", "Set-Cookie", "csrfToken"],
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 200
};

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", 'https://sahntek.hallowedvisions.com');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Cookie, Set-Cookie, csrfToken");
    return res.status(200).end();
  }
  cors(corsOptions)(req, res, next);
};
