
const { createCategoryService } = require("../service/CategoriesService")


const createCategoryBusiness = async (payload) => {
  try {
    const { name, parentId } = payload;
    if (!name) {
      return {
        status: 400,
        message: 'Category name is required'
      };
    }
   
    const newCategory = await createCategoryService({ name, parentId });

    return {
      status: 201,
      message: 'Category created successfully',
      data: newCategory
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message || 'Something went wrong'
    };
  }
};







module.exports = { createCategoryBusiness };