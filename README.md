
# Favorite Movies API

A beginner-friendly REST API built using Node.js and Express.js.
It returns a list of favorite movies in JSON format.

## Features

- Returns a list of five movies.
- Provides a GET /movies endpoint.
- Returns data in JSON format.
- Includes a welcome page.

## Technologies Used

- JavaScript
- Node.js
- Express.js

## Project Structure

```text
favorite-movies-api/
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── node_modules/
```

## Installation

Clone the repository and enter the project folder.

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Welcome message |
| GET | /movies | Returns all movies as JSON |

## Test the API

Open this URL in your browser after starting the server:

http://localhost:3000/movies

## Author

Nupur Jadhav
