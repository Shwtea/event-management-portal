
const {  loginBussiness } = require("../businessLogic/UserBusinessLogic")


const loginController = (req, res, next) => {
    const { email, password } = req.body;
    loginBussiness( email, password)
        .then((response) => {
            res.json(response,response.status)
        })
        .catch((e) => {
            res.status(500).json({ error: e.message });
        })
}

module.exports = { loginController }