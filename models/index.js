const User = require('./User');
const Category = require('./Category');
const Image = require('./Image');

User.hasMany(Image, {
    foreignKey: 'user_id'
});

Image.belongsTo(User, {
    foreignKey: 'user_id'
});

Category.hasMany(Image, {
    foreignKey: 'category_id'
});

Image.hasMany(Category, {
    foreignKey: 'category_id'
});

module.exports = { User, Category, Image};