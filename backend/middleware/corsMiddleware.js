const cors = require("cors");
require('dotenv').config()
const allowedOrigins = [
  "http://localhost:5173", 
  "https://sahntek.hallowedvisions.com",
  "https://sahntek-frontend-production.up.railway.app"
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

module.exports = cors(corsOptions);
