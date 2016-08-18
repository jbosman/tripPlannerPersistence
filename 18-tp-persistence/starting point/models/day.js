var Sequelize = require('sequelize');
var db = require('./_db');
var Hotel = require('./hotel');


var daySchema = {};

daySchema.number = {
	type: Sequelize.INTEGER,
	allowNull: false
};

dayOptions = {};

dayOptions.getterMethods = {};

dayOptions.hooks = {};

// dayOptions.hooks.afterValidate = function(day){

// }

dayOptions.getterMethods.getDaysLength = function() {
	return Day.findAll()
		.then(function(days){
			return days.length;
		})
		.catch(console.log);
}


var Day = db.define('day', daySchema, dayOptions);

module.exports = Day;