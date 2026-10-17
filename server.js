
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON request bodies
app.use(express.json());

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

// GET: Return all movies
app.get("/movies", (req, res) => {
    res.json(movies);
});

// GET: Find a movie by ID
app.get("/movies/:id", (req, res) => {
    const movieId = Number(req.params.id);

    if (!Number.isInteger(movieId) || movieId <= 0) {
        return res.status(400).json({
            message: "Please provide a valid movie ID"
        });
    }

    const movie = movies.find((m) => m.id === movieId);

    if (!movie) {
        return res.status(404).json({
            message: "Movie not found"
        });
    }

    res.json(movie);
});

// POST: Add a new movie
app.post("/movies", (req, res) => {
    const { title, genre, year, rating } = req.body;

    // Validate movie details
    if (
        typeof title !== "string" ||
        !title.trim() ||
        typeof genre !== "string" ||
        !genre.trim() ||
        !Number.isInteger(year) ||
        year < 1888 ||
        year > new Date().getFullYear() + 10 ||
        typeof rating !== "number" ||
        !Number.isFinite(rating) ||
        rating < 0 ||
        rating > 10
    ) {
        return res.status(400).json({
            message:
                "Provide a valid title, genre, year, and rating between 0 and 10."
        });
    }

    // Generate a unique ID
    const newId = movies.length
        ? Math.max(...movies.map((movie) => movie.id)) + 1
        : 1;

    // Create the new movie
    const newMovie = {
        id: newId,
        title: title.trim(),
        genre: genre.trim(),
        year,
        rating
    };

    // Save the movie in memory
    movies.push(newMovie);

    // Return the created movie
    res.status(201).json({
        message: "Movie added successfully",
        movie: newMovie
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Handle invalid JSON
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            message: "Invalid JSON request body"
        });
    }

    next(err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`All movies: http://localhost:${PORT}/movies`);
    console.log(`Find a movie: http://localhost:${PORT}/movies/1`);
});
