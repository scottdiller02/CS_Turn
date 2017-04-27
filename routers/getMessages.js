var express = require('express')
, router = express.Router()

var db=require("../db");
 
router.get("/getMessages", function(req, res){
	var collection1 = db.getDb().collection('messages')
	res.setHeader("Content-Type", "application/json");
	collection1.find().toArray(function(err, docs){
	//docs contains all records from phase1 in 
	//js array format
	var infomessage=[];
	for(doc of docs) 
	info1.push(doc);
	res.json(infomessage);
	})
})


router.get("/checkMessages", function(req, res){
	var collection1 = db.getDb().collection('messages');

	collection1.find().toArray(function(err, docs){
		res.render('checkMessages', {infomessage: docs})
	})
})

module.exports = router
