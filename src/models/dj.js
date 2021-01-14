'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Club, {
        foreignKey: "club_id",
        as: "clubs",
      });
      this.belongsToMany(models.Musicalgenre, {
        through: "Djmusicalgenres",
        foreignKey: "dj_id",
        as: "musicalgenres",
        onDelete: 'CASCADE'
      });
    }
  };
  Dj.init({
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
    url_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [3, 50]
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
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        len: [500, 2000]
      }
    },
    soundcloud: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 1000]
      }
    },
    facebook: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 1000]
      }
    },
    instagram: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 1000]
      }
    },
    spotify: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 1000]
      }
    },
    beatport: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 1000]
      }
    },
    mixcloud: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 1000]
      }
    },
    youtube: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 1000]
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Dj',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Dj;
};