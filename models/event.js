const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Event', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    publishTime: DataTypes.DATE,
    isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    photos: { type: DataTypes.ARRAY(DataTypes.TEXT) } // PostgreSQL array
  },
   {
    tableName: 'Events',       
    timestamps: true, 
});
};
