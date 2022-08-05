const router = require('express').Router();
const { rest } = require('lodash');
const { Image, User } = require('../models');

router.get('/', async (req, res) => {

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

  router.get('/images/:id', async (req, res) => {

    Image.findOne({
  
      where: {
        id: req.params.id
    },
    attributes: [
      'id',
      'image_name',
      'hosted_url',
      'description'
    ]
    })
      .then(imagesData => { 
        const images = imagesData.get({ plain: true });
        res.render('single-image', {
          images,
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
  
    });


  router.get('/dashboard/:id', async (req, res) => {

    User.findOne({
      where: {
        id: req.params.id
    },
      attributes: ['username'],
      include: [{
        model: User,
        attributes: [ 'id',
        'image_name',
        'hosted_url',
        'description',
        'user_id',
        'category_id']
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

    router.get('/signup', (req,res) => res.render('signup'))

    router.get('/login', (req,res) => res.render('login'))

  module.exports = router;