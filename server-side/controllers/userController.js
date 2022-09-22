const { compareBcrypt, signJWT } = require("../helpers");
const { User } = require("../models");

class userController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { code: 400, msg: "Email is required" };
      } else if (!password) {
        throw { code: 400, msg: "Password is required" };
      }

      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user || !compareBcrypt(password, user.password)) {
        throw { code: 401, msg: "Invalid email/password" };
      }
      const access_token = signJWT({
        id: user.id,
      });
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, address, phoneNumber } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        address,
        phoneNumber,
      });
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = userController;
