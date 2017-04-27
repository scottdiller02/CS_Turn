var express = require('express')
, router = express.Router()

var db=require("../db");
 
router.get("/getPaint", function(req, res){
	var collection1 = db.getDb().collection('paint')
	res.setHeader("Content-Type", "application/json");
	collection1.find().toArray(function(err, docs){
	//docs contains all records from phase1 in 
	//js array format
	var infopaint=[];
	for(doc of docs) 
	info1.push(doc);
	res.json(infopaint);
	})
})


router.get("/paint", function(req, res){
	var collection1 = db.getDb().collection('paint');

	collection1.find().toArray(function(err, docs){
		res.render('paint', {infopaint: docs})
	})
})

module.exports = router
