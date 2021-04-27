// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// // Handles the handlebars
// // https://www.npmjs.com/package/hbs
// const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// // default value for title local
// const projectName = "noramartin-server";
// const capitalized = (string) =>
//   string[0].toUpperCase() + string.slice(1).toLowerCase();

// app.locals.title = `${capitalized(projectName)}- Generated with IronGenerator`;

//deploying
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/api", index);

// const allRoutes = require("./routes");
// app.use("/api", allRoutes);

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });


//for deploy
app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + '/public/index.html');
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
