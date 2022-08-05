//require sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Comment model
class Comment extends Model {}

// define fields/columns id, userId, postId, comment
Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      image_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'image',
          key: 'id'
        }
      },
      commentary: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
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
    modelName: 'comment'
  }
);

module.exports = Comment;