const router = require('express').Router();
const { rest } = require('lodash');
const { Image, User, Comment } = require('../models');

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
        'image_name',
        'hosted_url',
        'description']
    }]

  })
    .then(dashboardData => {
      const dashboard = dashboardData.map(dashboard => dashboard.get({ plain: true }));
      res.render('dashboard', {
        dashboard,
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })

});

router.get('/request', (req, res) => res.render('request'));

router.get('/signup', (req, res) => res.render('signup'));

router.get('/login', (req, res) => res.render('login'));

module.exports = router;