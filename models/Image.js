const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Image extends Model {}

Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        image_name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        },
/*         artist_name:{
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username',
              },
        }, */
        hosted_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'category',
              key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW, 
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'image',
    }
);

module.exports = Image;