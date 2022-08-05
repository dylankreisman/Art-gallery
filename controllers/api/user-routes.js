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

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'username','email'],
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

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
    
        req.session.save(() => {
          req.session.id = userData.id;
          req.session.logged_in = true;
    
          res.status(200).json(userData);
        });
      } catch (err) {
        res.status(400).json(err);
      }
})

router.post('/login', (req, res) => {
    User.findOne({
        where: { email: req.body.email}
    })
    .if (!userData) 
})

module.exports = router