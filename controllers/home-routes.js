const router = require('express').Router();
const { rest } = require('lodash');
const { Image } = require('../models');

router.get('/', async (req, res) => {

  // res.render('homepage');

  Image.findAll({
    attributes: [
      'image_name',
      'hosted_url',
      'artist_name',
      'description'
    ]
  })
    .then(imageData => {
      const image = imageData.map(content => image.get({ plain: true }));
      res.render('homepage', {
        contents,
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
  
  });

  router.get('/signup', (req,res) => res.render('signup'))

  router.get('/login', (req,res) => res.render('login'))

  module.exports = router;