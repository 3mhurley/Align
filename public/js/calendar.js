// calendar
var colors = ["#abe198", "#f7ef99", "#f1bb87", "#f78e69", "#19535f"];
var userName = "Bob";
var calendarId = 1234;
var userEvents = [
  {
    start: "2019-04-09T08:00:00-06:00",
    end: "2019-04-09T09:30:00-06:00",
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
var events = [];

function getSchedule(functionA) {
  var tempArray = [];
  $.get("/api/allSchedules", function(data) {
    for (var i = 0; i < 1; i++) {
      var tempEvent = {
        //title: data[i]["username"],
        start: data[i]["start"],
        end: data[i]["end"],
        rendering: "background",
        backgroundColor: colors[i]
      };
      // console.log(tempEvent);
      tempArray.push(tempEvent);
      // console.log('array ' + i);
      // console.log(tempArray);
      events[0] = tempEvent;
    }
  });
  return functionA(events);
}

function makeCal(evnt) {
  var calendarEl = document.getElementById("calendar");
  console.log('evnt');
  console.log(evnt);

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
    events: evnt, 
    select: function(info) {
      calendar.addEvent({
        title: userName,
        start: info.startStr,
        end: info.endStr,
        classNames: [userName, calendarId]
      });

      var myEvent = {
        cal_id: calendarId,
        username: userName,
        start: info.startStr,
        end: info.endStr
      };

      $.post("/api/schedules",myEvent)
        .then(function() {
          console.log("added new calendar");
          //pass function to get suggestions?
      });
    }
  });

///////////////////////////////////////////////////////  

  calendar.render();
}

// FullCalendar
document.addEventListener("DOMContentLoaded", getSchedule(makeCal));