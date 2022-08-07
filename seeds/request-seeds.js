const { Request } = require('../models');

const requestData = [
    {
        user_id: "1",
        description: "Pen drawing of Clancy from Midnight Gospel",
        category_id: "3",
        price: "20"
    }
]


const seedRequests = () => Request.bulkCreate(requestData);

module.exports = seedRequests;