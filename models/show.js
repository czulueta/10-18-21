const mongoose = require("mongoose")
const Schema = mongoose.Schema

const showSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    genre: {
        type: String,
        enum: ["mystery","action","popular","thriller","sci-fi"],
        required: true
    }
})

module.exports = mongoose.model("Show", showSchema)