var db = require("../models");

module.exports = function(app) {
  
  // Get all times
  // app.get("/api/calendar", function(req, res) {
  //   db.Calendar.findAll({}).then(function(dbCalendar) {
  //     res.json(dbCalendar);
  //   });
  // });

  // post for adding times
  app.post("/api/schedule", function(req, res) {
    db.Schedule.create(req.body).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });


//get route for retrieving suggestions
  app.get("/api/suggestions", function(req, res) {
    db.Schedule.count({
        group: ['start'], 
        having: Sequelize.literal('count(*) > 1')
  }).then(function(dbSchedule) {
    res.json(dbSchedule);
    });
  });
};
  


