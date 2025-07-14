require('./config/db-init');
const { app } = require('./index');
const { sequelize } = require('./config/db.config');
const ROUTES = require('./config/route-constant');

// Import models
const User = require('./models/user')(sequelize);
const Event = require('./models/event')(sequelize);
const Category = require('./models/category')(sequelize);

// Setup associations manually
User.hasMany(Event, { foreignKey: 'userId' });
Event.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Category, { as: 'children', foreignKey: 'parentId' });
Category.hasMany(Event, { foreignKey: 'categoryId' });
Event.belongsTo(Category, { foreignKey: 'categoryId' });

const serverPort = 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connection established.');

  })
  .then(() => {
    console.log('✅ Models synced.');

    app.listen(serverPort, () => {
      console.log(
        `🚀 Server running on http://localhost:${serverPort}\n📄 Swagger at http://localhost:${serverPort}${ROUTES.BASE_ROUTE}${ROUTES.SWAGGER_ROUTE}`
      );
    });
  })
  .catch((err) => {
    console.error('❌ DB connection or sync failed:', err);
  });
