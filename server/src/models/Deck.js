const {Sequelize, sequelize, dataTypes, Model} = require('../db/config.js');
// create your Deck model here

let Deck = sequelize.define("Deck", {
    // create deck properties
    id : DataTypes.INTEGER,
    name : DataTypes.STRING,
    xp : DataTypes.INTEGER

});

module.exports = {
    Deck
};