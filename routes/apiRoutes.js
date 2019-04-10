var db = require("../models");

module.exports = function(app) {
  // Get all times
  app.get("/api/calendar", function(req, res) {
    db.Calendar.findAll({}).then(function(dbCalendar) {
      res.json(dbCalendar);
    });
  });

  // Create a new time
  app.post("/api/newTime", function(req, res) {
    db.Schedule.create(req.body).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  // create a new user
  app.post("/api/examples/:user", function(req, res) {
    db.Users.create(req.pram.user).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // create a new calendar
  app.post("/api/calendar/:id", function(req, res) {
    db.Calendar.create(req.param.id).then(function(dbCalendar) {
      res.json(dbCalendar);
    });
  });

  // get user information
  app.get("/api/users", function(req, res) {
    db.Users.findAll(users).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get Calendar
  app.get("/api/calendar/:id", function(req, res) {
    db.Calendar.findAll(calendars, {
      where: {
        calendarID: req.param.id
      }
    }).then(function(dbCalendar) {
      res.json(dbCalendar);
    });
  });
};

//route for suggesting
// app.get("/api/suggestion/:id", function(req, res) {
//   db.Schedule.count({
//       group: ['time'], 
//       having: Sequelize.literal('count(*) >1') 
//   })
// }).then(function(dbSchedule) {
//   res.json(dbSchedule);
// });