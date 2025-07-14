const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    parentId: { type: DataTypes.INTEGER, allowNull: true },
  },
   {
    tableName: 'Categories',       
    timestamps: true, 
});
};
