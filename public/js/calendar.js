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
        //pass function to get suggestions?
      });
    }
  });

///////////////////////////////////////////////////////  

  //suggestions
  var suggestions = [];
  //getting suggestions from database 
  getSuggestions();


  //function to reset display with new suggestions from the db
  function initializeList() {
    //empty div before adding content
    $("#best-times").empty();
    for (var i = 0; i < suggestions.length; i++) {
      toAdd.push(createSuggestion(suggestions[i]));  
    };
    $("#best-times").append(toAdd);
  };

  //function grabbing suggestions from db and updating the view
  function getSuggestions() {
    $.get("/api/suggestions", function(data) {
      suggestions = data;
      initializeList();
    });
  };

  //function to construct new suggestion row
  function createSuggestion(suggestions) {
    //append with suggestions
    $("#best-times").append("<li> 1: " + suggestions + "<li>");
    $("#best-times").append("<li> 2: " + suggestions + "<li>");
    $("#best-times").append("<li> 3: " + suggestions + "<li>"); 
  }







  


  calendar.render();
});
