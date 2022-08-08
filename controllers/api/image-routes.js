const router = require('express').Router()
const { User, Image, Category, Comment } = require('../../models')


router.get('/',  (req, res) => {
    Image.findAll({
        attributes: ['id', 'image_name', 'description', 'category_id', 'hosted_url'],
        order: [['date_created', 'DESC']],
        include: [
          {
            model: Comment,
            attributes: ['id', 'commentary', 'image_id', 'user_id', 'date_created'],
          },
          {
            model: User,
            attributes: ['username', 'id',]
          }
        ]
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
    console.log(err)
    res.status(500).json(err)
})
})

router.get('/:id', (req, res) => {
    Image.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'image_name', 'description', 'category_id', 'hosted_url'],
        order: [['date_created', 'DESC']],
        include: [
          {
            model: Comment,
            attributes: ['id', 'commentary', 'image_id', 'user_id', 'date_created'],
          },
          {
            model: User,
            attributes: ['username', 'id']
          }
        ]
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
    Image.create(req.body, {
        where: {
            model: Image
        }
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;