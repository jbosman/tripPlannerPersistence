var attractionsRouter = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');


attractionsRouter.get('/hotels', function(req, res, next){
	Hotel.findAll()
		.then(function(hotels){
			res.json(hotels);
		})
		.catch(console.log);
});

attractionsRouter.get('/restaurants', function(req, res, next){
	Restaurant.findAll()
		.then(function(allRestaurants){
			res.json(allRestaurants);
		})
		.catch(console.log);
});

attractionsRouter.get('/activities', function(req, res, next){
	Activity.findAll()
		.then(function(allActivities){
			res.json(allActivities);
		})
		.catch(console.log);
});


module.exports = attractionsRouter;