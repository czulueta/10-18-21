const express = require("express")
const showRouter = express.Router()
const Show = require("../models/show.js")

showRouter.get("/", (req, res, next) => {
    Show.find((err, shows) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(shows)
    })
})
showRouter.get("/:showId", (req, res, next) => {
    Show.findOne({ _id: req.params.showId }, (err, show) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(show)
    })
})
showRouter.get("/search/genre", (req, res, next) => {
    Show.find(
        { genre: req.query.genre }, 
        (err, genre) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(genre)
    })
})
showRouter.post("/", (req, res, next) => {
    const newShow = new Show(req.body)
    newShow.save((err, savedShow) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedShow)
    })
})
showRouter.delete("/:showId", (req, res, next) => {
    Show.findOneAndDelete(
        { _id: req.params.showId }, 
        (err, deletedShow) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`successfully deleted ${deletedShow.title}`)
    })
})
showRouter.put("/:showId", (req, res, next) =>{
    Show.findOneAndUpdate(
        { _id: req.params.showId }, 
        req.body, 
        {new: true}, 
        (err, updatedShow) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(202).send(updatdShow)
    })
})

module.exports = showRouter