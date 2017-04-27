var bodyParser = require('body-parser');
var express = require('express')
, router = express.Router()
var db=require("../db");
//support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data

router.use(bodyParser.urlencoded({ extended: true }));
router.post("/contactServer", function(req, res){
	var name=req.body.name;
	var emailPhone=req.body.emailPhone;
	var message=req.body.message;
	console.log(name);
	console.log(emailPhone);
	console.log(message);

	var collection = db.getDb().collection('messages')
	var query={"message":message};
	collection.find(query).toArray(function(err, docs){
	
	if (docs.length===0)
	{
		collection.insert({"name":name, "emailPhone":emailPhone, "message":message}, function(err, result)
		{
			if(err==null)
				res.render("contact", {errmessage:"Message Sent Successfully", errcolor:"alert alert-success"});
			else
				res.render("contact", {errmessage:"ERROR: try again", errcolor:"alert alert-danger"})
		});
	
		//res.redirect("/");
	}
	else
	{
		res.render("contact", {errmessage:"Failed: message has already been submitted", errcolor:"alert alert-danger"})
	}
	})
})


module.exports = router
