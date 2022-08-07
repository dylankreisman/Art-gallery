const router = require('express').Router()
const userRoutes = require('./user-routes');
const imageRoutes = require('./image-routes');
const categoryRoutes = require('./category-routes');
const requestRoutes = require('./request-routes');

router.use('/users', userRoutes);
router.use('/images', imageRoutes);
router.use('/categories', categoryRoutes);
router.use('/requests', requestRoutes);

module.exports = router;