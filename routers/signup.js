var bodyParser = require('body-parser');
var express = require('express')
, router = express.Router()
var db=require("../db");
//support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
//OFFICE
router.use(bodyParser.urlencoded({ extended: true }));
router.post("/signupServer", function(req, res){
	var email=req.body.email;
	var pwd=req.body.pwd;
	console.log(email);
	console.log(pwd);

	var collection = db.getDb().collection('users')
	var query={"email":email};
	collection.find(query).toArray(function(err, docs){
	
	if (docs.length===0)
	{
		collection.insert({"email":email, "password":pwd}, function(err, result)
		{
			if(err==null)
				res.redirect("/");
			else
				res.render("signup", {errmessage:"ERROR: try again"})
		});
	
		//res.redirect("/");
	}
	else
	{
		res.render("signup", {errmessage:"Failed: Email has already been used", errcolor:"alert alert-danger"})
	}
	})
})

//MAINTENANCE
router.post("/signupServerM", function(req, res){
	var email=req.body.email;
	var pwd=req.body.pwd;
	console.log(email);
	console.log(pwd);

	var collection = db.getDb().collection('maintenanceUsers')
	//res.setHeader('Content-Type', 'application/json')
	var query={"email":email};
	collection.find(query).toArray(function(err, docs){
	//docs contains all records from menu in 
	//js array format
	//var info=[];
	//for(doc of docs) 
	//info.push(doc);
	if (docs.length===0)
	{
		collection.insert({"email":email, "password":pwd}, function(err, result)
		{
			if(err==null)
				res.redirect("/");
			else
				res.render("signupM", {errmessage:"ERROR: try again"})
		});
	
		//res.redirect("/");
	}
	else
	{
		res.render("signupM", {errmessage:"Failed: Email has already been used", errcolor:"alert alert-danger"})
	}
	})
})

//CLEANERS
router.post("/signupServerC", function(req, res){
	var email=req.body.email;
	var pwd=req.body.pwd;
	console.log(email);
	console.log(pwd);

	var collection = db.getDb().collection('cleaners')
	//res.setHeader('Content-Type', 'application/json')
	var query={"email":email};
	collection.find(query).toArray(function(err, docs){
	//docs contains all records from menu in 
	//js array format
	//var info=[];
	//for(doc of docs) 
	//info.push(doc);
	if (docs.length===0)
	{
		collection.insert({"email":email, "password":pwd}, function(err, result)
		{
			if(err==null)
				res.redirect("/");
			else
				res.render("registerC", {errmessage:"ERROR: try again"})
		});
	
		//res.redirect("/");
	}
	else
	{
		res.render("registerC", {errmessage:"Failed: Email has already been used", errcolor:"alert alert-danger"})
	}
	})
})

//PAINTERS
router.post("/signupServerP", function(req, res){
	var email=req.body.email;
	var pwd=req.body.pwd;
	console.log(email);
	console.log(pwd);

	var collection = db.getDb().collection('painters')
	//res.setHeader('Content-Type', 'application/json')
	var query={"email":email};
	collection.find(query).toArray(function(err, docs){
	//docs contains all records from menu in 
	//js array format
	//var info=[];
	//for(doc of docs) 
	//info.push(doc);
	if (docs.length===0)
	{
		collection.insert({"email":email, "password":pwd}, function(err, result)
		{
			if(err==null)
				res.redirect("/");
			else
				res.render("registerP", {errmessage:"ERROR: try again"})
		});
	
		//res.redirect("/");
	}
	else
	{
		res.render("registerP", {errmessage:"Failed: Email has already been used", errcolor:"alert alert-danger"})
	}
	})
})

module.exports = router
