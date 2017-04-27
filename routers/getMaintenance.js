var express = require('express')
, router = express.Router()

var db=require("../db");
 
router.get("/getMaintenance", function(req, res){
	var collection1 = db.getDb().collection('maintenance')
	res.setHeader("Content-Type", "application/json");
	collection1.find().toArray(function(err, docs){
	//docs contains all records from phase1 in 
	//js array format
	var infomaintenance=[];
	for(doc of docs) 
	info1.push(doc);
	res.json(infomaintenance);
	})
})


router.get("/maintenance", function(req, res){
	var collection1 = db.getDb().collection('maintenance');

	collection1.find().toArray(function(err, docs){
		res.render('maintenance', {infomaintenance: docs})
	})
})

module.exports = router
