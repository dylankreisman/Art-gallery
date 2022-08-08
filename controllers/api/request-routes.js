const router = require('express').Router()
const { User, Request, Category } = require('../../models')

router.get('/',  (req, res) => {
    Request.findAll({
        attributes: ['id', 'username', 'category_id', 'description', 'price', 'date_created'],
        order: [['date_created', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['id', 'email']
          },
          {
            model: Category,
            attributes: ['id', 'category_name']
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
    Request.findOne({
        where: {
            id: req.params.id
        },
        attributes:['id', 'username', 'category_id', 'description', 'price', 'date_created'],
        order: [['date_created', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['id', 'email']
          },
          {
            model: Category,
            attributes: ['id', 'category_name']
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
    Request.create(req.body, {
        where: {
            model: Request
        }
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router;