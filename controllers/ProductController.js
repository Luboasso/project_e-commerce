const { Product, Order, Category, User, Sequelize } = require('../models/index.js');
const { Op } = Sequelize;
const ProductController = {

    insert(req, res, next) {

        Product.create(req.body)

            .then(product => {
                product.addOrder(req.body.orders_id)
                res.send(product)
            })
            .catch(err => console.error(err))
    },
    async getAll(req, res) {
        try {
            const products = await Product.findAll({
                include: Category,
            });
            res.json(products);
        } catch (error) {
            console.error(error);
            next(error)
        }
    },


    async update(req, res) {
        try {
            await Product.update(req.body,
                {
                    where: {
                        id: req.params.id,
                    },
                }
            );
            const product = await Product.findByPk(req.params.id)
            product.setOrders(req.body.orders_id);
            res.send("Product updated successfully");
        } catch (error) {
            console.error(error);
            res
                .status(500)
                .send({
                    message: "It was not possible to update the product"
                });
        }
    },

    async delete(req, res) {
        await Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.send("The product has been successfully deleted.");
    },

    getById(req, res) {
        Product.findByPk(req.params.id, {
            include: [Category],
        })
            .then((product) => res.send(product))
            .catch((err) => {
                console.error(err);
                res.status(500).send(err);
            });
    },

    getByName(req, res) {
        Product.findOne({
            where: {
                product_name: {
                    [Op.like]: `%${req.params.product_name}%`,
                },
            },

        })
            .then((product) => res.send(product))
            .catch((err) => {
                console.error(err);
                res.status(500).send(err);
            });
    },

    getPrice(req, res) {
        console.log(req.params.price)
        Product.findOne({
            where: {
                price: req.params.price

            },

        })
            .then((product) => res.send(product))
            .catch((err) => {
                console.error(err);
                res.status(500).send(err);
            });
    },

    getOrderedPrice(req, res) {
    Product.findAll({
        order: [['price', 'DESC']],
    })
        .then((product) => res.send(product))
        .catch((err) => {
            console.error(err);
            res.status(500).send(err);
        });
    }
}
module.exports = ProductController