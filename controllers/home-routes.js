const router = require('express').Router();
const { rest } = require('lodash');
const { Image } = require('../models');

router.get('/', async (req, res) => {

  // res.render('homepage');

  Image.findAll({
    attributes: [
      'id',
      'title',
      'body',
      'publish_date'
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