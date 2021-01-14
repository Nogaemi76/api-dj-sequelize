'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DjMusicalGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Dj, {
        foreignKey: "dj_id"
      });
      this.belongsTo(models.MusicalGenre, { 
        foreignKey: "musicalgenre_id"
      });
    }
  };
  DjMusicalGenre.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        notNull: true,
        isUUID: 4
      }
    }
  }, {
    sequelize,
    modelName: 'DjMusicalGenre',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return DjMusicalGenre;
};