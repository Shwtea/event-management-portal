
const {  createCategoryBusiness } = require("../businessLogic/CategoriesBusinessLogic")

const createCategoryController = async (req, res) => {
  try {
    const payload = req.body;
    const result = await createCategoryBusiness(payload);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to create category', error: error.message });
  }
};


module.exports = { createCategoryController }