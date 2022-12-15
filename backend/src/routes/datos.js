const express = require("express")
const router = express.Router()

const Datos = require("../models/datos.model")


router.get("/get-datos", async (req, res) => {
    const datos = await Datos.find()
    return res.status(200).json({data: datos})
})



router.post('/create-datos', async (req, res) => {

    const newDatos = new Datos(req.body)
    await newDatos.save()
    return res.status(201).json({msg: "Datos guardados exitosamente"})
})


router.delete('/delete-datos', async (req, res) => {
    await Datos.findByIdAndDelete(req.query.id)
    return res.status(200).json({msg: "Datos eliminados", id: req.query.id})
})



router.put('/update-datos', async (req, res) => {
    await Datos.findByIdAndUpdate(req.query.id, {$set: req.body})
    return res.status(200).json({msg: "Datos actualizados"})
})



module.exports = router