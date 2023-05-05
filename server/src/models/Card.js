const {Sequelize, sequelize, dataTypes, Model} = require('../db/config.js');
// create your Attack model here

let Card = sequelize.define("Card", {
    //create card properties
    id : DataTypes.INTEGER,
    name : DataTypes.STRING,
    mojo : DataTypes.INTEGER,
    stamina : DataTypes.INTEGER,
    imgUrl : DataTypes.STRING

});

module.exports = {
    Card
};