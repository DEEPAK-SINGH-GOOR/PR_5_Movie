const {Router}=require('express')
const {createMovie,getMovie,deleteMovie,findById,findMovieByUserId,updateMovie}=require("../controllers/movie.controllers")

const MovieRoute=Router()

MovieRoute.get("/",getMovie)
MovieRoute.get("/:id",findById)
MovieRoute.post("/",createMovie)
MovieRoute.patch("/:id",updateMovie)

MovieRoute.delete("/:id", deleteMovie)

MovieRoute.get("/:id/userId",findMovieByUserId)

module.exports = MovieRoute

