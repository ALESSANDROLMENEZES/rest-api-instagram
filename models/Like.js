/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Like', {
    'usersId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'User',
        key: 'id'
      }
    },
    'postsId': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null",
      references: {
        model: 'Post',
        key: 'id'
      }
    }
  }, {
    tableName: 'likes'
  });
};
