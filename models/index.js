const User = require('./User');
const Category = require('./Category');
const Image = require('./Image');
const Comment = require('./Comment');
const Request = require('./Request');

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
    foreignKey: 'image_id'
});

User.hasMany(Request, {
    foreignKey: 'user_id'
});

Request.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Category, Image, Comment, Request};