const { Order, User,ProductOrder,Product, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;
const OrderController = {
    async create(req,res){
        try {
            const order = await Order.create({UserId:req.user.id})
            res.status(201).send({msg:"Order created successfully",order})
        } catch (error) {
            console.error(error);
            res.status(500).send({ msg: "There has been an issue", err })
        }
    },
    async getAllOrdersWithProducts(req, res) {
        try {
          const orders = await Order.findAll({
            include: Product, 
          });
      
          res.status(200).json({ orders });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'There has been an issue' });
        }
      }
      
};

module.exports = OrderController;