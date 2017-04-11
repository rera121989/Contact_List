var express = require("express");
var app = express();

//CLICK ctrl + c to quit server and continue with commands

//root is demonstrated by '/' symbol
// returns diff things for differnt pages
	/*app.get("/", function (req, res){
		res.send("Hello Raymond");
	});
	*/

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function(req,res){
	//returns this to the server as users refresh this page or request
	console.log("I received a GET request, sending data");


		person1 = {name: "Mark", email: "Mart@marc.com", number: "(323) 823-8347"};
		person2 = {name: "Chuck", email: "chuck@chuck.com", number: "(323) 947-1453"};
		person3 = {name: "Lilo", email: "lilo@lilo.com", number: "(323) 743-0983"};

		contacts = [person1, person2, person3];
		res.json(contacts);
});


app.listen(3000);
console.log("Server Running on port 3000");