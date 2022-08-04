const router = require('express').Router()
const userRoutes = require('./user-routes');
// const imageRoutes = require('./image-routes');
// const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
// router.use('/images', imageRoutes);
// router.use('/categories', categoryRoutes);

module.exports = router;