const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Adjust path as necessary

const Users = sequelize.define('Users', {
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Designation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  CardNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true, // Assuming ID should be unique
  },
});

module.exports = Users;
