const router = require('express').Router();
const { rest } = require('lodash');
const { Image, User, Comment, Request } = require('../models');

router.get('/', (req, res) => {

  Image.findAll({

    attributes: [
      'id',
      'image_name',
      'hosted_url',
      'description'
    ]
  })
    .then(imageData => {
      const images = imageData.map(image => image.get({ plain: true }));
      res.render('homepage', {
        images,
        logged_in: req.session.logged_in 
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })

});

router.get('/images/:id', (req, res) => {

  Image.findOne({

    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'image_name',
      'hosted_url',
      'description'
    ],
    include: [
      {
        model: Comment,
        attributes: ['commentary', 'date_created']
      }
    ]

  })
    .then(imagesData => {
      const image = imagesData.get({ plain: true });
      res.render('single-image', {
        image,
        logged_in: req.session.logged_in
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })

});


router.get('/dashboard/:id', (req, res) => {

  User.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['username', 'id'],
    include: [{
      model: Image,
      attributes: [
        'id',
        'image_name',
        'hosted_url',
        'description']
    }]
  })
    .then(dashData => {
      const dashboard = dashData.get({ plain: true });
      res.render('dashboard', {
        dashboard,
        logged_in: req.session.logged_in
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
})

// request home_route
router.get('/requests', (req, res) => {

  Request.findAll({

    attributes: [
      'id',
      'username',
      'description',
      'date_created',
      'price'
    ]
  })
    .then(requestData => {
      const request = requestData.map(request => request.get({ plain: true }));
      res.render('requests', {
        request,
        logged_in: req.session.logged_in
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })

});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard/"+req.session.user_id);
    return;
  }

  res.render('login');
});

router.get('/signup', (req,res) => res.render('signup'))


router.post('/upload', (req, res) => {
    // res.redirect('/image)
    console.log(req);
});


router.get('/request', (req, res) => res.render('request', {
  logged_in: req.session.logged_in
}));

router.get('/upload', (req, res) => res.render('upload', {
  logged_in: req.session.logged_in
}));


module.exports = router;