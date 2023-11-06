const { Category, Product,Sequelize } = require('../models/index.js');
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
    }
}
module.exports = CategoryController