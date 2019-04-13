var db = require("../models");

module.exports = function(app) {
  
  // Get all times
  app.get("/api/allSchedules", function(req, res) {
    db.Schedules.findAll({include: [db.Calendars]}).then(function(dbSchedules) {
      res.json(dbSchedules);
    });
  });

  // post for adding times
  app.post("/api/schedules", function(req, res) {
    db.Schedules.create(req.body).then(function(dbSchedules) {
      res.json(dbSchedules);
    });
  });


//get route for retrieving suggestions
  // app.get("/api/suggestions", function(req, res) {
  //   db.Schedules.count({
  //       group: ['start'], 
  //       having: Sequelize.literal('count(start) > 1')
  // }).then(function(dbSchedules) {
  //   res.json(dbSchedules);
  //   });
  // });
};
  //distinct?
  //return top three


