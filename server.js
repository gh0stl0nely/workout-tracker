const express = require('express');
const app = express();

// Basic configuration and parser
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring routes 
app.use('/',require("./routes/routes"));
app.use('/api',require("./routes/api"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Connected to PORT " + PORT);
});