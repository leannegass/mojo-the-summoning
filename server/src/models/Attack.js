const {Sequelize, sequelize, dataTypes, Model} = require('../db/config.js');
// create your Attack model here

let Attack = sequelize.define("Attack", {
    // create attack properties
    id : DataTypes.INTEGER,
    title : DataTypes.STRING,
    mojoCost : DataTypes.INTEGER,
    staminaCost : DataTypes.INTEGER

});

module.exports = {
    Attack
};