let express = require("express");
let app = express();
let hostname = "localhost";
let port = 3000;
app.use(express.json());
let redirect = "http://localhost:3000/index.html";
let client_id = "";
let client_secret = "";
app.use(express.static("public"));
var SpotifyWebApi = require('spotify-web-api-node');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
// app.get("/index.html", (req, res) => {
//     return res.send(`<!DOCTYPE html>
//     <html>
//         <head>
//             <title>Spotify Login</title>
//         </head>
//         <body>
//             <div>Authentication Succesful</div>
//         </body>
//     </html>`);

// });

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/PIC2.JPEG", (req, res) => {
    res.sendFile(__dirname + "/PIC2.JPEG");
});

app.get("/logo.png", (req, res) => {
    res.sendFile(__dirname + "/logo.png");
});

app.get("/cook.png", (req, res) => {
    res.sendFile(__dirname + "/cook.png");
});

app.get("/collab.png", (req, res) => {
    res.sendFile(__dirname + "/collab.png");
});

app.get("/check.png", (req, res) => {
    res.sendFile(__dirname + "/check.png");
});

app.get("/Dinner-Date.jpeg", (req, res) => {
    res.sendFile(__dirname + "/Dinner-Date.jpeg");
});

app.get("/Feel-Good.jpeg", (req, res) => {
    res.sendFile(__dirname + "/Feel-Good.jpeg");
});

app.get("/Brunch.jpeg", (req, res) => {
    res.sendFile(__dirname + "/Brunch.jpeg");
});

app.get("/Random.png", (req, res) => {
    res.sendFile(__dirname + "/Random.png");
});

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`);
});



