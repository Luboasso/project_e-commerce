const {
  User,
  Token,
  Product,
  Order,
  Sequelize,
} = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];
const { Op } = Sequelize;

const UserController = {
  create(req, res, next) {
    req.body.role = "user";
    const password = bcrypt.hashSync(req.body.password, 10);
    User.create({ ...req.body, password })

      .then((user) =>
        res
          .status(201)
          .send({ message: "The user has been successfully created.", user })
      )
      .catch((error) => {
        console.error(error);
        next(error);
      });
  },

  async update(req, res) {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.send("The user has been successfully updated.");
  },

  login(req, res) {
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res
          .status(400)
          .send({ message: "Incorrect username or password" });
      }

      const isMatch = bcrypt.compareSync(req.body.password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "Incorrect username or password" });
      }

      const token = jwt.sign({ id: user.id }, jwt_secret);
      Token.create({ token, UserId: user.id });
      res.send({ message: "Welcome" + user.name, user, token });
    });
  },

  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },

            { token: req.headers.authorization },
          ],
        },
      });

      res.send({ message: "Disconnected successfully." });
    } catch (error) {
      console.log(error);

      res
        .status(500)
        .send({ message: "There was a problem trying to disconnect you." });
    }
  },

  async getUserInfo(req, res) {
    try {
      const user = await User.findByPk(req.user.id, {
        include: [
          {
            model: Order,
            include: {
              model: Product,
              through: "ProductOrder",
            },
          },
        ],
      });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "There has been an issue" });
    }
  },
};

module.exports = UserController;
