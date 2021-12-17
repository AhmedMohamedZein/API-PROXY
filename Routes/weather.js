const express = require ('express');
const Routes = express.Router();
const path = require ('path');
const fetch = require('node-fetch');

require('dotenv').config({path : 'C:\Users\AhmedZein\Desktop\API-PROXY\.gitignore\.env'});

Routes.get ('/' , ( req, res)=> {
    res.sendFile(path.join (  process.env.mainHtmlPage ) );
});

// Third party library endpoints ,so here we fetch data from it.





module.exports = Routes;