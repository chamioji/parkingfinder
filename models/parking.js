'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Parking.belongsTo(models.Owner, {
        foreignKey: 'ownerId',
        targetKey: 'id'
      });
    }
  };
  Parking.init({
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    postcode: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    address: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    price: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Parking',
  });
  return Parking;
};