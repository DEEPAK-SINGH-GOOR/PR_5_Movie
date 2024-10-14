const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title:String,
    description:String,
    releaseDate:Date,
    category:String,
    actors: [{ name: String }],
    image:String,
    ratings: [
        {
            value:{type:Number, min:0,max:10},
        },
    ],
    comments: [
        {
            text: String,
        },
    ],
    addedBy: String,
})

const Movie = mongoose.model('Movie', MovieSchema);


module.exports = Movie;