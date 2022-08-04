const { Image } = require('../models');

const imageData = [
    {
        hosted_url: "./seeds/images/20210104_102447.jpg",
        category_id: "1",
        user_id: "1"
    },
    {
        hosted_url: "./seeds/images/20210117_122454.jpg",
        category_id: "1",
        user_id: "2"
    },
    {
        hosted_url: "./seeds/images/20220804_140547.jpg",
        category_id: "3",
        user_id: "3"
    }
]

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;