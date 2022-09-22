const { verifyJWT } = require("../helpers");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const token = verifyJWT(access_token);
    const user = await User.findByPk(token.id);
    if (!user) {
      throw { code: 404, msg: "User not found" };
    }
    req.user = { id: user.id, email: user.email };
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authentication };
