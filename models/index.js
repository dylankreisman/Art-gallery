const User = require('./User');
const Category = require('./Category');
const Image = require('./Image');
const Comment = require('./Comment');

User.hasMany(Image, {
    foreignKey: 'user_id'
});

Image.belongsTo(User, {
    foreignKey: 'user_id'
});

Image.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Image, {
    foreignKey: 'category_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Image.hasMany(Comment, {
    foreignKey: 'image_id'
});


Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Image, {
    foreignKey: 'post_id'
});

module.exports = { User, Category, Image, Comment};