const Sequelize = require('sequelize');
require('dotenv').config();
const cloudinary = require("cloudinary").v2;

const sequelize = process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize

cloudinary.config({
    cloud_name: "dkwiaib2k",
    api_key: "769369652917377",
    api_secret: "Rr7WebAKdqYDC_9w4dxZlGFNsdE"
});

cloudinary.uploader
.upload("./public/images/20210104_102447.jpg", {
    secure: true,
    resource_type: "image",
})
.then((result) => {
    console.log("success", JSON.stringify(result, null, 2));
})
.catch((error) => {
    console.log("error", JSON.stringify(error, null, 2));
});