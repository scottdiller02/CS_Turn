var express = require('express')
, router = express.Router()

var db=require("../db");
//change 
router.get("/getApartments", function(req, res){
	var collection1 = db.getDb().collection('phase1')
	var collection2 = db.getDb().collection('phase2')
	var collection3 = db.getDb().collection('phase3')
	var collection4 = db.getDb().collection('phase4')
	res.setHeader("Content-Type", "application/json");
	collection1.find().toArray(function(err, docs){
	//docs contains all records from phase1 in 
	//js array format
	var info1=[];
	for(doc1 of docs1) 
	info1.push(doc1);
	res.json(info1);
	})
	collection2.find().toArray(function(err, docs){
	//docs contains all records from phase2 in 
	//js array format
	var info2=[];
	for(doc2 of docs2) 
	info2.push(doc2);
	res.json(info2);
	})
	collection3.find().toArray(function(err, docs){
	//docs contains all records from phase3 in 
	//js array format
	var info3=[];
	for(doc3 of docs3) 
	info3.push(doc3);
	res.json(info3);
	})
	collection4.find().toArray(function(err, docs){
	//docs contains all records from phase4 in 
	//js array format
	var info4=[];
	for(doc4 of docs4) 
	info4.push(doc4);
	res.json(info4);
	})
})


router.get("/apartments", function(req, res){
	var collection1 = db.getDb().collection('phase1');
	var collection2 = db.getDb().collection('phase2');
	var collection3 = db.getDb().collection('phase3');
	var collection4 = db.getDb().collection('phase4');

	collection1.find().toArray(function(err, docs1){
		collection2.find().toArray(function(err, docs2){
			collection3.find().toArray(function(err, docs3){
				collection4.find().toArray(function(err, docs4){
					res.render('apartments', {infoP1: docs1, infoP2: docs2, infoP3: docs3, infoP4: docs4})
				})
			})
		})
	})
})

/*
	collection2.find().toArray(function(err, docs2){
	//docs contains all records from menu in 
	//js array format
	//var info=[];
	//for(doc of docs) 
	//info.push(doc);
	res.render('apartments', {infoP2: docs2})
	})

	collection3.find().toArray(function(err, docs3){
	//docs contains all records from menu in 
	//js array format
	//var info=[];
	//for(doc of docs) 
	//info.push(doc);
	res.render('apartments', {infoP3: docs3})
	})

	collection4.find().toArray(function(err, docs4){
	//docs contains all records from menu in 
	//js array format
	//var info=[];
	//for(doc of docs) 
	//info.push(doc);
	res.render('apartments', {infoP4: docs4})
	})
})
*/
module.exports = router
