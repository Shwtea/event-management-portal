const express = require("express");
const ROUTES = require("../../config/route-constant");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");


const categoriesRoute = express.Router();

const {
  createCategoryController,
} = require("../controllers/CategoriesController");


categoriesRoute.post(
  ROUTES.CREATECATEGORY,
  admin,
  (req, res, next) => createCategoryController(req, res, next)
);

module.exports = categoriesRoute;