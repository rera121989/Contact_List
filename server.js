var express = require("express");
var app = express();
var mongojs = require("mongojs");
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require("body-parser");

//CLICK ctrl + c to quit server and continue with commands
//root is demonstrated by '/' symbol
// returns diff things for differnt pages
	/*app.get("/", function (req, res){
		res.send("Hello Raymond");
	});
	*/
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList', function(req,res){
	//returns this to the server as users refresh this page or request
		console.log("I received a GET request, sending data");

		db.contactlist.find(function(err,docs){
			console.log(docs);
			res.json(docs);
		});
});
app.post("/contactlist", function(req, res){
	console.log(req.body);
	db.contactlist.save(req.body, function(err, docs){
		res.json(docs);
	});

});

app.delete('/contactlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	});
});

app.listen(3000);
console.log("Server Running on port 3000");