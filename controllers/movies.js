/* eslint-disable linebreak-style */
const Movie = require('../models/movie');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const BadRequestError = require('../middlewares/errors/BadRequestError');
const ForbiddenError = require('../middlewares/errors/ForbiddenError');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user._id;
  Movie.find({ owner })
    .then((data) => res.send(data))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user._id;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner,
  })
    .then((movie) => res.status(201).send(movie))
    .catch((error) => {
      if (error.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные при создании'));
      } else {
        next(error);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        next(new NotFoundError('Фильм с указанным id не найден'));
      }
      if (movie.owner.toString() !== req.user._id) {
        return next(new ForbiddenError('Доступ запрещен'));
      }
      return movie
        .findByIdAndDelete(movie)
        .then(() => res.status(200).send({ message: 'Фильм успешно удален' }));
    })
    .catch((error) => {
      if (error.name === 'CustomError') {
        next(new NotFoundError('Пользователь по указанному id не найден'));
      } else {
        next(error);
      }
    });
};
