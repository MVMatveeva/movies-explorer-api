/* eslint-disable linebreak-style */
const {
  NODE_ENV = 'production',
  JWT_SECRET = '082f710a180ba4731ebd2ec9c74b399ffccff6d6f6e596472a8a2e4f6eabf7185003dd7c86eb7e06432b3799746475f5bcef9568a6edcbbcc19f883f7ecb02ad',
  PORT = 3000,
  MONGO_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
} = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  PORT,
  MONGO_URL,
};
