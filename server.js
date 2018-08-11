var express = require("express"); 
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
const HOMEPAGE = "index.html";

app.get("/", (req, resp) => {
    res.sendFile(path.join(__dirname, HOMEPAGE))
})

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("App listening on PORT: http://localhost:" + PORT);
})