const router = require('express').Router()
const { Category, Image, User } = require('../../models')

router.get('/', (req, res) => {
Category.findAll({
    model: Category,
    attributes: ['id', 'category_name', 'image_id'],
    include: [{
        model: Image,
        attributes:  ['id', 'image_name', 'description']
    },
    {
        model: User,
        attributes: ['username','email']
    }
    ]
})
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
        res.status(500).json(err)
    })
}
)

router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'category_name', 'image_id'],
       include: [
        { model: Image, 
        attributes: ['image_name', 'description','hosted_url']
        },
        { model: User, 
        attributes: ['username', 'email']
        }
       ]
    })
    .then((categoryData) => res.join(categoryData))
    .catch((err) => {
        res.status(500).json(err)
    })
}
)

module.exports = router