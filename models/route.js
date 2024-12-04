'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Route.init({
    tripId: DataTypes.INTEGER,
    startPoint: DataTypes.STRING,
    endPoint: DataTypes.STRING,
    departureTime: DataTypes.DATE,
    arrivalTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};