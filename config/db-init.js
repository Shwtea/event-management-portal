// db-init.js
const pgtools = require('pgtools');

const config = {
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432,
};

const dbName = 'eventPortal';

pgtools.createdb(config, dbName)
  .then(() => {
    console.log(`✅ Database "${dbName}" created successfully.`);
  })
  .catch(err => {
    if (err.name === 'duplicate_database') {
      console.log(`ℹ️ Database "${dbName}" already exists.`);
    } else {
      console.error('❌ Error creating database:', err);
    }
  });
