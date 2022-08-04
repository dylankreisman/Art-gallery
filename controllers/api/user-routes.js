const router = require('express').Router()
const { User, Image, Category } = require('../../models')


router.get('/',  (req, res) => {
    User.findAll({
        attributes: ['id', 'username','email'],
        include: [
        {
            model: Image,
            attributes: ['id', 'image_name', 'description', 'category_id', 'hosted_url']
        }]
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
    console.log(err)
    res.status(500).json(err)
})
})

router.get('/:username', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'username','email','image_id','user_id'],
        include: [{
            model: Image,
            attributes: ['id', 'image_name', 'description', 'category_id']
        }]
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/:username', (req, res) => {
    User.create(req.body, {
        where: {
            model: User
        }
    })
    .then((userData) => res.json(userData))
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router

