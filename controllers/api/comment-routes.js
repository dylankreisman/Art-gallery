const router = require('express').Router()
const { User, Image, Category, Comment } = require('../../models')


router.get('/', (req, res) => {
    Request.findAll({
        attributes: ['id',
            'commentary',
            'user_id',
            'image_id',
            'date_created'
        ],
        order: [['date_created', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['id', 'email']
            },
        ]

    })
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

router.get('/:id', (req, res) => {

    Request.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id',
            'commentary',
            'user_id',
            'image_id',
            'date_created'
        ],
        order: [['date_created', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['id', 'email']
            },
        ]

    })
        .then((commentData) => res.json(commentData))
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
        .then((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
});

module.exports = router