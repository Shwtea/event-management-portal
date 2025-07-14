const { sequelize } = require('../../config/db.config');
const { Op } = require('sequelize');
const Event = require('../../models/event')(sequelize);
const User = require('../../models/user')(sequelize);
const Categories = require('../../models/category')(sequelize);

const createCategoryService = async ({ name, parentId }) => {
   if (parentId) {
    console.log("10",parentId)
      const parentCategory = await Categories.findByPk(parentId);
      if (!parentCategory) {
        return {
          status: 404,
          message: 'Parent category not found'
        };
      }
    }
  const category = await Categories.create({
    name,
    parentId: parentId || null
  });
  return category;
};




module.exports = {  createCategoryService};