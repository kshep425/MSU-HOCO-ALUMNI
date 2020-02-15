const express = require("express");
const path = require('path')
const app = module.exports = express();
console.log('html_routes page')
module.exports = function (app) {
    app.get("/", function (req, res) {
        console.log("Open Homepage");
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    })
}