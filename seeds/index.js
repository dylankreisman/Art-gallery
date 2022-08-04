const seedImages = require('./image-seeds');
const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedImages();
  console.log('\n----- IMAGES SEEDED -----\n');

  process.exit(0);
};

seedAll();