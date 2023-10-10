"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Spas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Spas.hasMany(models.Dogs, {
        foreignKey: "spa_id",
        onDelete: "cascade",
      });
    }
  }
  Spas.init(
    {
      name: DataTypes.STRING,
      longitude: DataTypes.STRING,
      latitude: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Spas",
    }
  );
  return Spas;
};
