const { Product, Sequelize } = require('../models/index.js');
const { Op } = Sequelize;
const ProductController = {
    create(req, res) {
        Product.create(req.body)
            .then(Product => res.status(201).send({ message: 'Product created successfully', Product }))
            .catch(err => console.error(err))
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