const router = require('express').Router()
const { User, Image, Category, Request, Comment } = require('../../models')


router.get('/', (req, res) => {
    Comment.findAll({
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

    Comment.findOne({
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
    if (req.session) {
        Comment.create({
            commentary: req.body.commentary,
            image_id: req.body.image_id,
            user_id: req.body.user_id
        })
            .then((commentData) => res.json(commentData))
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            })
    }
});

module.exports = router