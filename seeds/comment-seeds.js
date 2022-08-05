const { Comment } = require('../models');

const commentData = [
    {
        user_id: "1",
        image_id: "2",
        commentary: "Oh geez!"
    },
    {
        user_id: "2",
        image_id: "1",
        commentary: "Amazing!!!"
    },
    {
        user_id: "3",
        image_id: "1",
        commentary: 'After the picture- "Oh my neck!"'
    },
    {
        user_id: "1",
        image_id: "3",
        commentary: "I think I visited there with family last May, wonderful scenery!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;