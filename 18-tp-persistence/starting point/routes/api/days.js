var daysRouter = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');
var Day = require('../../models/day');

daysRouter.get('/', function(req, res, next){
	Day.findAll()
		.then(function(days){
			res.json(days);
		})
		.catch(console.log);
});

daysRouter.get('/:id/', function(req, res, next){
	Restaurant.findOne({
		where: {
			number: req.params.id
		}
	})
		.then(function(day){
			res.json(day);
		})
		.catch(console.log);
});

daysRouter.post('/', function(req, res, next){

	req.body.hotel
	

	Day.create({
			number: Day.getDaysLength() + 1
		}
	)
	.then(function(day){
		res.send("Created Day");
	})
	.catch(console.log);
});

daysRouter.get('/:id/hotel', function(req, res, next){
	Restaurant.findOne({
		where: {
			number: req.params.id
		}
	})
		.then(function(day){
			res.json(day);
		})
		.catch(console.log);
});

daysRouter.post('/:id/hotel', function(req, res, next){
	Restaurant.findOne({
		where: {
			number: req.params.id
		}
	})
		.then(function(day){
			res.json(day);
		})
		.catch(console.log);
});


module.exports = daysRouter;