const router = require('express').Router()
const userRoutes = require('./user-routes');
const imageRoutes = require('./image-routes');
const categoryRoutes = require('./category-routes');
const requestRoutes = require('./request-routes');
// const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/images', imageRoutes);
router.use('/categories', categoryRoutes);
router.use('/requests', requestRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;