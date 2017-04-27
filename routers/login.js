var express = require('express')
, router = express.Router()
var db = require('../db')
var assert=require('assert')
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());

router.get('/logout', function(req, res) {
	req.session.destroy();
	res.render('signin', 
		{errmessage:"Logout Successful", errcolor:"alert alert-success"});
});	

//OFFICE
router.get('/signin', function(req, res) {
	res.render('signin');
});

   router.post('/checklogin', function(req, res) {
   	var collection = db.getDb().collection('users');
   	var email=req.body.email;
   	var pwd=req.body.pwd;
   	var condition=`{"email":"${email}","password":"${pwd}"}`;
   	collection.find(JSON.parse(condition)).toArray(function(err, items) {
   		assert.equal(null,err);
   		if(items.length===0)
   			res.render('signin', 
   				{errmessage:"Login Failed", errcolor:"alert alert-danger"
   			});
   		else
   			{
   				req.session.admin=true;
   				req.session.user=email;
   				res.redirect('/apartments');
   			}
   		});
   });

//MAINTENANCE
router.get('/signinM', function(req, res) {
	res.render('signinM');
});

router.post('/checkloginM', function(req, res) {
   	var collection = db.getDb().collection('maintenanceUsers');
   	var email=req.body.email;
   	var pwd=req.body.pwd;
   	var condition=`{"email":"${email}","password":"${pwd}"}`;
   	collection.find(JSON.parse(condition)).toArray(function(err, items) {
   		assert.equal(null,err);
   		if(items.length===0)
   			res.render('signinM', 
   				{errmessage:"Login Failed", errcolor:"alert alert-danger"
   			});
   		else
   			{
   				req.session.admin=true;
   				req.session.user=email;
   				res.redirect('/maintenance');
   			}
   		});
   });

//PAINTERS
router.get('/registerP', function(req, res) {
	res.render('registerP');
});

router.post('/checkloginP', function(req, res) {
   	var collection = db.getDb().collection('painters');
   	var email=req.body.email;
   	var pwd=req.body.pwd;
   	var condition=`{"email":"${email}","password":"${pwd}"}`;
   	collection.find(JSON.parse(condition)).toArray(function(err, items) {
   		assert.equal(null,err);
   		if(items.length===0)
   			res.render('registerP', 
   				{errmessage:"Login Failed", errcolor:"alert alert-danger"
   			});
   		else
   			{
   				req.session.admin=true;
   				req.session.user=email;
   				res.redirect('/paint');
   			}
   		});
   });

//CLEANERS
router.get('/registerC', function(req, res) {
	res.render('registerC');
});

router.post('/checkloginC', function(req, res) {
   	var collection = db.getDb().collection('cleaners');
   	var email=req.body.email;
   	var pwd=req.body.pwd;
   	var condition=`{"email":"${email}","password":"${pwd}"}`;
   	collection.find(JSON.parse(condition)).toArray(function(err, items) {
   		assert.equal(null,err);
   		if(items.length===0)
   			res.render('registerC', 
   				{errmessage:"Login Failed", errcolor:"alert alert-danger"
   			});
   		else
   			{
   				req.session.admin=true;
   				req.session.user=email;
   				res.redirect('/clean');
   			}
   		});
   });

   module.exports = router;