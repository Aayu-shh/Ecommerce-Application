const {Sequelize} = require('sequelize');           //Curly braces to enable IntelliSense ~ Code help while typing

const sequelize = new Sequelize('node-complete', 'root', '#Ash28jun#', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;