/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-useless-escape */
const router = require('express').Router();
const userRouter = require('./users');
const movieRouter = require('./movies');
const { auth } = require('../middlewares/auth');
const { login, createUser } = require('../controllers/users');
const NotFoundError = require('../middlewares/errors/NotFoundError');
const { validationCreateUser, validationLogin } = require('../utils/validation');

router.post('/signin', validationLogin, login);

router.post('/signup', validationCreateUser, createUser);

router.use(auth);

router.use('/users', userRouter);

router.use('/movies', movieRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Пользователь по указанному id не найден'));
});

module.exports = router;
