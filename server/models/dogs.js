"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Dogs.belongsTo(models.Spas, { foreignKey: "spa_id" });
    }
  }
  Dogs.init(
    {
      name: DataTypes.STRING,
      breed: DataTypes.STRING,
      sexe: DataTypes.STRING,
      age: DataTypes.INTEGER,
      dog_life: DataTypes.STRING,
      spa_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dogs",
    }
  );
  return Dogs;
};
