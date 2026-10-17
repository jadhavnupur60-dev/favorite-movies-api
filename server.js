
const express = require("express");

const app = express();
const PORT = 3000;

// Favorite movies data
const movies = [
    {
        id: 1,
        title: "3 Idiots",
        genre: "Comedy Drama",
        year: 2009,
        rating: 8.4
    },
    {
        id: 2,
        title: "Dangal",
        genre: "Sports Drama",
        year: 2016,
        rating: 8.3
    },
    {
        id: 3,
        title: "Inception",
        genre: "Science Fiction",
        year: 2010,
        rating: 8.8
    },
    {
        id: 4,
        title: "Interstellar",
        genre: "Science Fiction",
        year: 2014,
        rating: 8.7
    },
    {
        id: 5,
        title: "Taare Zameen Par",
        genre: "Drama",
        year: 2007,
        rating: 8.3
    }
];

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the Favorite Movies API!");
});

// GET endpoint to return movies as JSON
app.get("/movies", (req, res) => {
    res.json(movies);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Movies API: http://localhost:${PORT}/movies`);
});
