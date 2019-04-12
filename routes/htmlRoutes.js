//var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  // create calendar  
  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });

  // load calendar
  app.get("/calendar", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/calendar.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.json("404");
  });
};
