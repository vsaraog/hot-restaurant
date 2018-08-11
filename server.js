var express = require("express"); 
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;
const HOMEPAGE = "Home.html";
const TABLES = "Tables.html";

var waitlist = [];
var reservation = [ {
    customerName: "Travis",
    email: "TDOG@gmail.com",
    phone: "122222",   
    unqiueID: 2,
    reservationNumber : 1
}];
var reservationNumber = 1;

app.get("/", (req, resp) => {
    res.sendFile(path.join(__dirname, HOMEPAGE));
})

app.get("/Tables", (req, resp) => {
    res.sendFile(path.join(__dirname, TABLES));
})



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/reservations", function(req, res) { 
    reservationNumber++;
    var newReservation = req.body;
    newReservation.reservationNumber = reservationNumber;
    if (reservation.length < 5) {
       
        reservation.push(newReservation);


    } else { 
   
    waitlist.push(newReservation); 

    }
    console.log(newReservation);
    res.json(newReservation);

});

app.listen(PORT, () => {
    console.log("App listening on PORT: http://localhost:" + PORT);
})