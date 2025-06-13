const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
app.set('trust proxy', 1);
// Middleware Imports
const corsMiddleware = require("./middleware/corsMiddleware");
const helmetMiddleware = require("./middleware/helmetMiddleware");
const { passport } = require("./config/passport");
const cookieParserMiddleware = require("./middleware/cookieParserMiddleware");
const bodyParserMiddleware = require("./middleware/bodyParserMiddleware");
const { errorMiddleware } = require("./middleware/errors/errorMiddleware");
//security middleware lolers
// const {fingerprint} = require('./middleware/security/fingerPrintMiddleware')
const { csrf } = require('./middleware/security/csrfMiddleware')
const { validateCsrf } = require('./middleware/security/validateCsrfMiddleware')
// const { validateRefreshCsrf } = require('./middleware/security/validateRefreshCsrf')
// Apply Middleware
app.use(cookieParserMiddleware);
// app.use(fingerprint)
app.use(bodyParserMiddleware);
app.use(corsMiddleware);
app.use(helmetMiddleware);
app.use(passport.initialize());

// Routers
// const logoutRouter = require("./routes/auth/logoutRouter");
// const loginRouter = require("./routes/auth/loginRouter");
// const refreshRouter = require("./routes/auth/refreshRouter");
const computerRouter = require("./routes/computer/computerRouter");


// Routes
app.use("/api/auth/csrf", csrf)
// app.use("/api/login", validateCsrf, loginRouter);
// app.use("/api/auth/refresh",validateRefreshCsrf, refreshRouter);

// Logout Route
// app.use("/api/logout", logoutRouter)
app.use("/api/computers", validateCsrf, computerRouter)
app.use(errorMiddleware)
// Server
app.listen(8080, () => {
  console.log("App running on port 8080");
});
