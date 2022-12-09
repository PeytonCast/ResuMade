require("dotenv").config();

const config = {
    jwtSecretKey: process.env.JWT_SECRET
    

};
// jwtExpiration: process.env.JWT_EXPIRATION,
module.exports = config;