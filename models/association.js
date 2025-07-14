const UserModel = require('./user');
const EventModel = require('./event');
const CategoryModel = require('./category');

function association(sequelize) {
  UserModel(sequelize);
  EventModel(sequelize);
  CategoryModel(sequelize);

  // Associations
  const { User } = sequelize.models;
  const { Event } = sequelize.models;
  const { Category } = sequelize.models;

  User.hasMany(Event, { foreignKey: 'userId' });
  Event.belongsTo(User, { foreignKey: 'userId' });

  Category.hasMany(Category, { as: 'children', foreignKey: 'parentId' });
  Category.hasMany(Event, { foreignKey: 'categoryId' });
  Event.belongsTo(Category, { foreignKey: 'categoryId' });
}

module.exports = { association };
