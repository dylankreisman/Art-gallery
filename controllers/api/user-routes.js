const router = require('express').Router()

const { User, Image, Category, Request } = require('../../models')
const { restore } = require('../../models/User')


router.get('/',  (req, res) => {
    User.findAll({
        attributes: ['id', 'username','email', 'password'],
        include: [
        {
            model: Image,
            attributes: ['id', 'image_name', 'description', 'category_id', 'hosted_url']
        },
        {
          model: Request,
          attributes: ['id', 'user_id', 'description', 'category_id', 'price']
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
        attributes: ['id','email'],
        include: [{
            model: Image,
            attributes: ['id', 'image_name', 'description', 'category_id']
        },
        {
          model: Request,
          attributes: ['id', 'user_id', 'description', 'category_id', 'price']
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
          req.session.user_id = userData.id;
          req.session.logged_in = true;
    
          res.status(200).json(userData);
        });
      } catch (err) {
        res.status(400).json(err);
      }
})

router.post('/login',  (req, res) => {
 User.findOne({
    where: {
        email: req.body.email, 
       // password: req.body.password
    },
    }).then((userData) => {
        if(!userData) {
            res.status(400).json({ message: 'Incorrect username or email, try again'})
            return;
    }
        // else {
        //     req.session.logged_in = true
        //     }
    

    const validPassword = userData.checkPassword(req.body.password)

    if(!validPassword) {
        res.status(400).json({ message: "Incorrect password, please try again"})
    return;
    }
    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.email = userData.email;
        req.session.logged_in = true;
        
         res.json(userData)
        })
 })
}
)
 router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router