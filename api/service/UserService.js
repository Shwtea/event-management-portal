const { sequelize } = require('../../config/db.config');
const User = require('../../models/user')(sequelize);


const existingUserService = async (email) => new Promise(async (resolve,reject) => {
    try {
        const existingUser = await User.findOne({ where: {email:email} });
        return resolve(existingUser) 
    } catch (error) {
        return reject(new Error(error))
    }
});


module.exports = {  existingUserService};