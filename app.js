var express=require("express");
var http=require("http");
var path=require("path");
var handlebars=require("express-handlebars").create({defaultLayout:"home"});
var bodyParser = require('body-parser');
var db = require('./db');
var dbLink=require("./json/config.json");
//var dbLink=require("./json/dbproduction.json");
var url = dbLink.devServer.url;
var app=express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//app.use(bodyParser.urlencoded({extended: true}));app.use(bodyParser.json());
var publicPath=path.resolve(__dirname, "public"	);
app.use(express.static(publicPath));
app.use(require('./routers/getApartments'));
//app.user routers
//CHANGE app.use(require("./routers/getMenuItems"));
//CHANGE app.use(require('./routers/signup'));
//CHANGE app.use(require('./routers/processOrders'));
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
	res.sendFile(`${publicPath}/contact.html`);
});

app.get("/signin",function(req,res){
		console.log("Coming a signuprequest!");
	res.render(`signin`);
});

app.get("/map",function(req,res){
		console.log("Coming a request!");
	res.sendFile(`${publicPath}/map.html`);
});

app.set('db',db);
module.exports.app=app;
