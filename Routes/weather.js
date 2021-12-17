const express = require ('express');
const Routes = express.Router();
const path = require ('path');


require('dotenv').config({path : 'C:\Users\AhmedZein\Desktop\API-PROXY\.gitignore\.env'});

Routes.get ('/' , ( req, res)=> {
    res.sendFile(path.join (  process.env.weatherHtmlPage ) );
});



module.exports = Routes;