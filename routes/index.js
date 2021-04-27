const router = require("express").Router();
let ContactModel = require("../models/Contact.model.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/contact", (req, res) => {
  ContactModel.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.post("/contact/create", (req, res) => {
  const { name, email, subject, message } = req.body;
  ContactModel.create({
    name: name,
    email: email,
    subject: subject,
    message: message,
  })

    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({
        error: "Something went wrong",
        message: error,
      });
    });
});

module.exports = router;
