const express = require("express");
const ROUTES = require("../../config/route-constant");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");

const multer = require("multer");
const storage = multer.memoryStorage(); // or diskStorage
const upload = multer({ storage });

const eventRoute = express.Router();

const {
  deleteEventController,
  createEventController,
  getPublishedEventsController,
} = require("../controllers/EventController");

module.exports = eventRoute;

eventRoute.post(
  ROUTES.CREATEEVENTS,
  auth,
  upload.array("photos"),
  (req, res, next) => createEventController(req, res, next)
);

eventRoute.delete(ROUTES.DELETEEVENT, admin, (req, res, next) =>
  deleteEventController(req, res, next)
);

eventRoute.get(ROUTES.GETEVENTS,auth, (req, res, next) =>
  getPublishedEventsController(req, res, next)
);
