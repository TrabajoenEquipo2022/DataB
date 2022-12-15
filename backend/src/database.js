const mongoose = require("mongoose")

const dbName = "DataB"
const uri = `mongodb+srv://Jesneth:maria*@datab.lyfix3w.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(uri, {useNewUrlParser: true})
    .then((db) => console.log("Conexion a base de datos exitosa"))
    .catch((err) => console.log(err))

module.exports = mongoose