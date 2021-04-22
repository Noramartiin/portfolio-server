require("../db/index.js");
const mongoose = require("mongoose");

let Contact = require("../models/Contact.model.js");

Contact.insertMany([
  {
    name: "Nora",
    email: "n@n.n",
    subject: "Prueba",
    message: "Esto es una prueba",
  },
])

  .then(() => {
    mongoose.connection.close();
  })

  .catch(() => {
    console.log("The message has not been uploaded");
  });
