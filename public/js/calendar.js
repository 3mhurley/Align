// calendar
var colors = ["#abe198", "#f7ef99", "#f1bb87", "#f78e69", "#19535f"];
var userName = "Bob";
var calendarId = "1234abcd";
var userEvents = [
  {
    start: "2019-04-10T10:00:00",
    end: "2019-04-10T16:00:00",
    rendering: "background",
    backgroundColor: colors[1]
  },
  {
    start: "2019-04-11T08:00:00",
    end: "2019-04-11T12:00:00",
    rendering: "background",
    backgroundColor: colors[1]
  },
  {
    start: "2019-04-11T10:00:00",
    end: "2019-04-11T15:00:00",
    rendering: "background",
    backgroundColor: colors[1]
  }
];

// FullCalendar
document.addEventListener("DOMContentLoaded", function() {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    height: 600,
    plugins: ["interaction", "dayGrid", "timeGrid"],
    defaultView: "timeGridWeek",
    selectable: true,
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay"
    },
    events: userEvents,
    select: function(info) {
      calendar.addEvent({
        title: userName,
        start: info.startStr,
        end: info.endStr,
        classNames: [userName, calendarId]
      });

      var myEvent = {
        calId: calendarId,
        uName: userName,
        start: info.startStr,
        end: info.endStr
      };

      $.ajax("/api/schedule", {
        type: "POST",
        data: myEvent
      }).then(function() {
        console.log("added new calendar");
      });
    }
  });

  calendar.render();
});
