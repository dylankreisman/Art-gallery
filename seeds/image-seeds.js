const { Image } = require('../models');

const imageData = [
    {
        hosted_url: "images/20210104_102447.jpg",
        category_id: "1",
        user_id: "1",
        image_name: "Beauty Within",
        description: "First sketched head, body then arm shape, then worked on skelelton from top down.",
    },
    {
        hosted_url: "images/20210117_122454.jpg",
        category_id: "1",
        user_id: "2",
        image_name: "The Loop",
        description: "The endless chase of looking, blinding yourself of sight.",
    },
    {
        hosted_url: "images/20220804_140547.jpg",
        category_id: "3",
        user_id: "3",
        image_name: "Fungi-Forest",
        description: "First sketch main view distance setting, then add layers in front and back.",
    },
]

const seedImages = () => Image.bulkCreate(imageData);

module.exports = seedImages;