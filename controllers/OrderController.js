const { Order, User, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const OrderController = {
    create(req, res){
        Order.create({UserId:req.user.id})
      .then((order) =>
        res.status(201).send({ message: "Order placed successfully", order })
      )
      .catch((err) => {
        console.error(err);
        res.status(500).send({ msg: "There has been an issue", err });
      })
    },
};

module.exports = OrderController;