const express = require('express');
const dbConnect = require('./config/db'); 
const userRouter = require('./routes/user.routes');
const movieRouter = require('./routes/movie.routes'); 
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({ msg: "Welcome to the Movie API" });
});

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter); 


dbConnect(); 
app.listen(8090, () => {
    console.log("Listening on port 8090");
});
