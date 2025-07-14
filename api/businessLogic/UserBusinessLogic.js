const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {  existingUserService } = require("../service/UserService")


const loginBussiness = async (email, password) => {
    try {
        const userExist = await existingUserService(email);

        if (!userExist) {
            return {
                status: 400,
                message: "User with this email is does not exist"
            }
        }
        const isMatch = await bcryptjs.compare(password, userExist.dataValues.password);
        if (!isMatch) {
            return {
                status: 400,
                message: "Password is Incorrect"
            }
        }
        const token = jwt.sign({ id: userExist._id }, "passwordKey");
        return {
            status: 200,
            result: { token, ...userExist._doc },
            message: "Logged In successfully"
        }
    } catch (error) {
        return {
            msg: error.message,
            status: error.status
        }
    }
}



module.exports = {  loginBussiness };