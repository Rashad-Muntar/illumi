const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description:{type:String, required:true},
    image: String,
    video: String

})


module.exports = mongoose.model("Product", productSchema)