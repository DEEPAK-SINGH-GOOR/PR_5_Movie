const Movie = require('../models/movie.schema');

const createMovie = async (req, res) => {
    console.log(req.body);
    let data = await Movie.create(req.body);
    res.send(data);
};

const getMovie = async (req, res) => {
    let data = await Movie.find();
    res.send(data);
};

const deleteMovie = async (req, res) => {
    let { id } = req.params;
    let data = await Movie.findByIdAndDelete(id);
    res.send(data);
}; 

const updateMovie = async (req, res) => {
    let { id } = req.params;
    let data = await Movie.findByIdAndUpdate(id, req.body);
    res.send(data);
};

const findById = async (req, res) => {
    let { id } = req.params;
    let data = await Movie.findById(id);
    res.send(data);
};

const findMovieByUserId = async (req, res) => {
    let { userId } = req.params;
    let data = await Movie.find({ userId: userId });
    res.send(data);
};

module.exports = { createMovie, getMovie, deleteMovie, findById, findMovieByUserId, updateMovie };
