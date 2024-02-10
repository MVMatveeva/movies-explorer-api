/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
const userRouter = require('express').Router();
const {
  updateUser,
  getUser,
} = require('../controllers/users');
const { validationUpdateUser } = require('../utils/validation');

userRouter.get('/me', getUser); //возвращает информацию о пользователе (email и имя)

userRouter.patch('/me', validationUpdateUser, updateUser); // обновляет информацию о пользователе (email и имя)

module.exports = userRouter;
