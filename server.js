var express = require("express"); 
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const HOMEPAGE = "Home.html";
const TABLES = "Tables.html";
const RESERVE = "Reserve.html";

const MAX_RESERVATION = 5;

var waitlist = [];
var reservation = [ {
    customerName: "Travis",
    email: "TDOG@gmail.com",
    phone: "122222",   
    unqiueID: 2,
    reservationNumber : 1
}];

app.get("/", (req, resp) => {
    resp.sendFile(path.join(__dirname, HOMEPAGE));
})

app.get("/tables", (req, resp) => {
    console.log("Tables request");
    resp.json(reservation);
    resp.json(waitlist);
    resp.sendFile(path.join(__dirname, TABLES));

})

// app.get("/reserve", (req, resp) => {
//     console.log("Reserve page requested");
//     resp.sendFile(path.join(__dirname, RESERVE));
// })

app.get("/reserve", (req, res) =>  { 
    var newReservation = req.body;
    newReservation.reservationNumber = getReservationCount();
    if (reservation.length < MAX_RESERVATION) {
        reservation.push(newReservation);
    } else {
        waitlist.push(newReservation); 
    }
    console.log(newReservation);
    res.json(newReservation);
});

function getReservationCount() {
    return reservation.length + waitlist.length;
}

app.listen(PORT, () => {
    console.log("App listening on PORT: http://localhost:" + PORT);
})