const express = require("express");
const ROUTES = require("../../config/route-constant");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin")

const userRoute = express.Router();
const {loginController} = require("../controllers/UserController")

module.exports = userRoute;


userRoute.post(ROUTES.LOGIN, (req, res, next) =>
    loginController(req, res, next),
);
