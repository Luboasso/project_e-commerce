const { Category } = require('../models/index.js');
const CateroryController = {
    create(req, res) {
        Category.create(req.body)
            .then(Category => res.status(201).send({ message: 'Category created successfully', Category }))
            .catch(err => console.error(err))
    },
}
module.exports = CategoryController