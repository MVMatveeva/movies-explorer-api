/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
const movieRouter = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const { validationCreateMovie, validationDeleteMovie } = require('../utils/validation');

movieRouter.get('/', getMovies); //возвращает все сохранённые текущим пользователем фильмы

movieRouter.post('/', validationCreateMovie, createMovie); //создаёт фильм с переданными в теле country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId

movieRouter.delete('/:movieId', validationDeleteMovie, deleteMovie); //удаляет сохранённый фильм по id

module.exports = movieRouter;
