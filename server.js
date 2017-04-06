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


app.listen(3000);
console.log("Server Running on port 3000");