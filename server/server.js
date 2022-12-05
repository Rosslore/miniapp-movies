const express = require('express');
const server = express();
const cors = require('cors');
const { restart } = require('nodemon');
const port = 8080;
const knex = require('knex')(require('./knexfile')["development"]);

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

server.get('/movies', async (req, res) => {
    const movies = await knex('movies')
        .select('*')
        .then((movies) => {
            res.status(200).json(movies);
        })
        .catch((err) => {
            res.status(400).send("Error, no movies found");
        });
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});