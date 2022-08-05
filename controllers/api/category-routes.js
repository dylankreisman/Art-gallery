const router = require('express').Router()
const { Category, Image, User } = require('../../models')

router.get('/', (req, res) => {
Category.findAll({
    attributes: ['id', 'category_name', 'image_id'],
    include: [{
        model: Image,
        attributes:  ['id', 'image_name', 'description']
    },
    // {
    //     model: User,
    //     attributes: ['username','email']
    // }
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
        attributes: ['id', 'image_name', 'description']
        }]
        // { model: User, 
        // attributes: ['id', 'username', 'email']
        // }
       
    })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
        console.log(err)
        res.status(500).json(err)
    })
}
)

module.exports = router