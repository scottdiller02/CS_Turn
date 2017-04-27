var express=require("express");
var http=require("http");
var path=require("path");
var handlebars=require("express-handlebars").create({defaultLayout:"home"});
var bodyParser = require('body-parser');
var db = require('./db');
var dbLink=require("./json/config.json");
//var dbLink=require("./json/dbproduction.json");
var url = dbLink.devServer.url;

var session=require("express-session");
var app=express();
app.use(session({
	secret: 'secret msg',
	resave: false,
	saveUninitialized: true
}))

var authAdmin=function(req,res,next){
	if(req.session &&req.session.admin)
		return next();
	else
		return res.send(401,"401: You need to log in!");
};

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
var publicPath=path.resolve(__dirname, "public"	);
app.use(express.static(publicPath));

app.get('/apartments', authAdmin);
app.use(require('./routers/getApartments'));
app.use(require('./routers/getMessages'));
app.use(require('./routers/getMaintenance'));
app.use(require('./routers/getPaint'));
app.use(require('./routers/getClean'));
//app.user routers
app.use(require('./routers/signup'));
app.use(require('./routers/contactUs'));
app.use(require('./routers/login'));
// Connect to Mongo on start
db.connect(url, function(err){
    if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
} else {
	var listener=http.createServer(app).listen(process.env.PORT||3000);
	console.log('Server is listening at port'+listener.address().port);
 }
})

app.get("/",function(req,res){
		console.log("Coming a request!");
	res.sendFile(`${publicPath}/home.html`);
});

app.get("/home",function(req,res){
		console.log("Coming amainrequest!");
	res.sendFile(`${publicPath}/home.html`);
});

app.get("/welcome",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`welcome`);
});

app.get("/apartments",function(req,res){
		console.log("Coming a request!");
	res.render(`apartments`);
});

app.get("/contactus",function(req,res){
		console.log("Coming a request!");
	res.render(`contact`);
});

app.get("/signin",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`signin`);
});

app.get("/signinM",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`signinM`);
});

app.get("/signinP",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`signinP`);
});

app.get("/signinC",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`signinC`);
});

app.get("/map",function(req,res){
		console.log("Coming a request!");
	res.render(`map`);
});

app.get("/signup",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`signup`);
});

app.get("/signupM",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`signupM`);
});

app.get("/registerC",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`registerC`);
});

app.get("/registerP",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`registerP`);
});

app.get("/checkMessages",function(req,res){
		console.log("Coming a request!");
	res.render(`checkMessages`);
});

app.get("/maintenance",function(req,res){
		console.log("Coming a request!");
	res.render(`maintenance`);
});

app.get("/paint",function(req,res){
		console.log("Coming a request!");
	res.render(`paint`);
});

app.get("/clean",function(req,res){
		console.log("Coming a request!");
	res.render(`clean`);
});

app.set('db',db);
module.exports.app=app;
