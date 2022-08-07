const { Request } = require('../models');

const requestData = [
    {
        user_id: "1",
        request_info: "Pen drawing of Clancy from Midnight Gospel",
    }
]


const seedRequests = () => Request.bulkCreate(requestData);

module.exports = seedRequests;