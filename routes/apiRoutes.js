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


  app.get("/api/suggestions", function(req, res) {
    db.Schedules.findAll({include: [db.Calendars]}).then(function(dbSchedules) {
      res.json(dbSchedules);
    });
  });
//get route for retrieving suggestions
//   app.get("/api/suggestions", function(req, res) {
//     db.Schedules.findAll({
//       attributes: {
//         include: [[sequelize.fn('COUNT', sequelize.col('start'))]]
//       }
//     }).then(function(dbSchedules) {
//       res.json(dbSchedules);
//     });
//   });
};
  //distinct?
  //return top three


