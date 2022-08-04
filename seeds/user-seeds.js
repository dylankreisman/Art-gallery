const { User } = require('../models');

const userData = [
    {
        username: "Shmuffman",
        email: "notanemail@gmail.com",
        password: "password1"
    },
    {
        username: "Dylsman",
        email: "possiblyanemail@gmail.com",
        password: "password2"
    },
    {
        username: "Marylon",
        email: "definetlyanemail@gmail.com",
        password: "password3"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;