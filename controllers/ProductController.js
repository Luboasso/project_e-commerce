const { Product, Order, Sequelize } = require('../models/index.js');
const { Op } = Sequelize;
const ProductController = {
    // create(req, res) {
    //    Product.create(req.body)
    //         .then(Product => res.status(201).send({ message: 'Product created successfully', Product }))
    //         .catch(err => console.error(err))
    // },

    insert(req, res) {

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
                include: [{ model: Order, through: { attributes: [] } }],
            });
            res.send(products);
        } catch (error) {
            console.error(error);
        }
    },

    // async update(req, res) {
    //     await Product.update(req.body, {
    //         where: {
    //             id: req.params.id,
    //         },
    //     });
    //     res.send("Product updated successfully");
    // },
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
}
module.exports = ProductController