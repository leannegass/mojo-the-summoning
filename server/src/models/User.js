const {Sequelize, sequelize, dataTypes, Model} = require('../db/config.js');
// create your User model here

let User = sequelize.define("User", {
    //create user properties
    name : DataTypes.STRING,
    email : DataTypes.STRING

});

module.exports = {
    User
};
