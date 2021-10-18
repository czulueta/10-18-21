const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    genre: {
        type: String,
        enum: ["action", "comedy", "thriller", "romantic", "sci-fi", "horrror"],
        required: true
    }
})

module.exports = mongoose.model("Movie", movieSchema)