const baseRoute = '/api/user';
const appVersion = 'v1';

const ROUTES = {
    BASE_ROUTE: `${baseRoute}`,
    BASE_ROUTE_API_DOC: baseRoute,
    SWAGGER_ROUTE: '/api-docs',
    GETUSER: `/${appVersion}/users`,
    REGISTER_USER: `/${appVersion}/register`,
    LOGIN: `/${appVersion}/login`,
    GETALLUSER: `/${appVersion}/allUser`,
    CREATEEVENTS: `/${appVersion}/events`,
    DELETEEVENT: `/${appVersion}/events/:id`,
    GETEVENTS: `/${appVersion}/events`,
    CREATECATEGORY: `/${appVersion}/categories`,
}

module.exports = ROUTES;