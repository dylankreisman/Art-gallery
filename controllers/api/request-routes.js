const router = require('express').Router()
const { User, Request } = require('../../models')

router.get('/',  (req, res) => {
    Request.findAll({
        attributes: ['id', 'user_id', 'request_info',],
        order: [['date_created', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['id']
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
        attributes:['id', 'user_id', 'request_info',],
        order: [['date_created', 'DESC']],
        include: [
          {
            model: User,
            attributes: ['id']
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