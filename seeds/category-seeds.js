const { Category } = require('../models');

const categoryData = [
    {
        category_name: "Realism"
    },
    {
        category_name: "Hyper_Realism"
    },
    {
        category_name: "Abstract"
    },
    {
        category_name: "Collage"
    },
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedUsers;