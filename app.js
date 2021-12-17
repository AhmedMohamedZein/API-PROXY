/* Here we make the endpoints to connect to the third party library 
 * It construct by building a Root -> with a name of the serves it's providing.
 * the endpoints inside the root have.
*/
// We will use the api key here to avoid someone else take is and use it.

const express = require("express");
const cors = require ("cors");
const path = require('path');

const proxy = express(); //app 

require('dotenv').config({path: __dirname + '/.gitignore/.env'}); //config, searches for the values inside the .env file
const PORT = process.env.PORT || 5000 ;
// Some helpful middlware.
//this middlware connect the server "proxy" to the html page to load poth css and js file for the page
proxy.use(express.static(__dirname)); 
proxy.use ( cors() );


proxy.use ('/weather' , require('./Routes/weather') );

proxy.listen (PORT , ()=> {
    console.log (`Someone is connected to the websit ${PORT} !`); 
});
