var express = require('express')
, router = express.Router()

var db=require("../db");
 
router.get("/getClean", function(req, res){
	var collection1 = db.getDb().collection('clean')
	res.setHeader("Content-Type", "application/json");
	collection1.find().toArray(function(err, docs){
	//docs contains all records from phase1 in 
	//js array format
	var infoclean=[];
	for(doc of docs) 
	info1.push(doc);
	res.json(infoclean);
	})
})


router.get("/clean", function(req, res){
	var collection1 = db.getDb().collection('clean');

	collection1.find().toArray(function(err, docs){
		res.render('clean', {infoclean: docs})
	})
})

module.exports = router
