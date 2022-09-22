const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signJWT = (obj) => {
  return jwt.sign(obj, "rahasia");
};
const verifyJWT = (access_token) => {
  return jwt.verify(access_token, "rahasia");
};
const hashBcrypt = (string) => {
  return bcrypt.hashSync(string);
};
const compareBcrypt = (string, hash) => {
  return bcrypt.compareSync(string, hash);
};

module.exports = { signJWT, verifyJWT, hashBcrypt, compareBcrypt };
