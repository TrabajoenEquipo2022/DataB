const express = require("express");
const router = express.Router();

//importar modelo
const User = require("../models/user.model");

//crear usuario
router.post("/signup", async (req, res) => {
  try {
    let { email } = req.body;
    //let email = req.body.email

    email = email.toLowerCase();
    req.body.email = email;

    //obtenber los usuarios que tienen ese email
    let userExists = await User.find({ email: { $eq: email } }); // [], [lhsjdlsahjd
    console.log(userExists);

    //validar si el email existe
    if (userExists.length !== 0) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json({ msg: "Usuario creado correctamente" });
  } catch (error) {
      console.log(error)
  }
});

  
  module.exports = router;
