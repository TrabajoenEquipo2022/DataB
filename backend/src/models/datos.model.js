const mongoose = require("mongoose")
const { Schema } = mongoose


const datosSchema = new Schema(
    {
        date: { type: String, required: true},
        name: { type: String, required: true},
        valorunitario: { type: String, required: true}, 
        cantidad: { type: String, required: true},
        stock: { type: String, required: true},
        estado: { type: String, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
)


module.exports = mongoose.model("datos", datosSchema)