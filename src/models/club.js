'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Dj, {
        foreignKey: "club_id",
        as: "djs",
      });
    }
  };
  Club.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notNull: true,
        isUUID: 4
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [3, 50]
      }
    }
  }, {
    sequelize,
    modelName: 'Club',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Club;
};