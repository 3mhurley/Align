var db = require("../models");

module.exports = function(app) {
  // Get all times
  app.get("/api/all-times", function(req, res) {
    db.Times.findAll({}).then(function(dbTimes) {
      res.json(dbTimes);
    });
  });

  // Create a new time
  app.post("/api/newTime", function(req, res) {
    db.Times.create(req.body).then(function(dbNewTime) {
      res.json(dbNewTime);
    });
  });

  // create a new user
  app.post("/api/examples/:user", function(req, res) {
    db.Calendar.create(req.pram.user).then(function(dbNewUser) {
      res.json(dbNewUser);
    });
  });

  // create a new calendar
  app.post("/api/calendar/:id", function(req, res) {
    db.Calendar.create(req.param.id).then(function(calendardb) {
      res.json(calendardb);
    });
  });

  // get user information
  app.get("/api/users", function(req, res) {
    db.Calendar.findAll(users).then(function(dbGetUsers) {
      res.json(dbGetUsers);
    });
  });

  // Get Calendar
  app.get("/api/calendar/:id", function(req, res) {
    db.Calendar.findAll(calendars, {where:{calendarID: req.param.id}}).then(function(dbGetCalendar) {
      res.json(dbGetCalendar);
    });
  });
};
