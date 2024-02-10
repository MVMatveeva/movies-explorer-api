/* eslint-disable linebreak-style */
const {
  NODE_ENV = 'production',
  JWT_SECRET = '5b5f38958016bc8db8d970c157a95221c40bdc4aa4c1231b05b2db5a190749cd',
  PORT = 3000,
  MONGO_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
} = process.env;

module.exports = {
  NODE_ENV,
  JWT_SECRET,
  PORT,
  MONGO_URL,
};
