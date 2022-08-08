const router = require('express').Router()
const { User, Image, Category, Comment } = require('../../models')


router.get('/',  (req, res) => {
    Request.findAll({
        attributes: ['id', 
        'commentary', 
        'user_id', 
        'image_id', 
        'date_created'
    ],
        order: [['date_created', 'DESC']],
 
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
    console.log(err)
    res.status(500).json(err)
    })
})


router.post('/', (req, res) => {
    Comment.create(req.body, {
        where: {
            model: Comment
        }
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
});

module.exports = router