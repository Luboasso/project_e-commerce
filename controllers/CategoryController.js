const { Post } = require('../models/index.js');
const PostController = {
    create(req, res) {
        Post.create(req.body)
            .then(post => res.status(201).send({ message: 'Publicación creada con éxito', post }))
            .catch(err => console.error(err))
    },
}
module.exports = PostController