const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const pkg = require('yamljs');
const compression = require("compression");
const ROUTES = require("./config/route-constant");
const userRoute = require("./api/routes/userRoutes");
const eventRoute = require("./api/routes/eventRoutes");
const categoriesRoute = require("./api/routes/categoriesRoutes");

dotenv.config();
const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerConfig = pkg.load('./api/swagger.yaml');

app.use(
    ROUTES.BASE_ROUTE_API_DOC + ROUTES.SWAGGER_ROUTE,
    swaggerUi.serve,
    swaggerUi.setup(swaggerConfig, { explorer: true }),
)

app.use(ROUTES.BASE_ROUTE, userRoute);
app.use(ROUTES.BASE_ROUTE,eventRoute);
app.use(ROUTES.BASE_ROUTE,categoriesRoute);

module.exports = {app};


