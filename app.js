const express = require('express');
const app = express();
const path = require("path");

const routes = require("./routes/weatherRoutes");

app.set('view engine', 'ejs');

app.use("/", routes);
app.use(express.static(__dirname + "/public"));


app.listen(3000, (err) => {
    if (err) throw err;
    console.log("Listen At Port 3000!");
});