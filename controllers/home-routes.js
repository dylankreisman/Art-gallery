const router = require('express').Router();
const { rest } = require('lodash');
const { Image } = require('../models');

router.get('/', async (req, res) => {

  // res.render('homepage');

  Image.findAll({
    // include: [
    //   {
    //     model: Image,
    //     attributes: ['image_name', 'hosted_url', 'description']
    //   },
    // ]
    attributes: [
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

  router.get('/signup', (req,res) => res.render('signup'))

  router.get('/login', (req,res) => res.render('login'))

  module.exports = router;