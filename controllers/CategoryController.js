const { Category, Product,Sequelize } = require('../models/index.js');
const { Op } = Sequelize;
const CategoryController = {
    create(req, res) {
        Category.create(req.body)
            .then(Category => res.status(201).send({ message: 'Category created successfully', Category }))
            .catch(err => console.error(err))
    },
    async getAllCategoriesWithProducts(req, res){
        try {
            const categories = await Category.findAll({
                include: Product,
            });
            res.json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'There has been an issue' });
        }
    },

    async delete(req, res) {
        await Category.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.send("The category has been successfully deleted.");
    },

    async update(req, res) {
        await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.send("The category has been successfully updated.");
    },

    getById(req, res) {
        Category.findByPk(req.params.id,)
            .then((product) => res.send(product))
            .catch((err) => {
                console.error(err);
                res.status(500).send(err);
            });
    },

    getByName(req, res) {
        Category.findOne({
            where: {
                category_name: {
                    [Op.like]: `%${req.params.category_name}%`,
                },
            },

        })
            .then((category) => res.send(category))
            .catch((err) => {
                console.error(err);
                res.status(500).send(err);
            });
    },
}
module.exports = CategoryController