$(document).ready(function() {

    //references to container and table body
    var calendarList = $("tbody");
    var calendarContainer = $("#calendar-container");

    //getting inital calendar
    getCalendar();

    //retreive calendar and get ready to render to page
    function getCalendar() {
        $.get("/api/schedule", function(data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createScheduleRow(data[i]));
            }
            renderCalendar(rowsToAdd);
        });
    }

    //function to render calendar list to page
    function renderCalendar(rows) {
        calendarList.children().not(":last").remove();
        calendarContainer.children(".alert").remove();
        if (rows.length) {
            console.log(rows);
            calendarList.prepend(rows);
        } else {
            return;
        }
    }

    $("#schedule-form").on("submit", function(event) {
        event.preventDefault();

        var newUser = {
            userId: $("#user_id"),
            userName: $("#new-user").val().trim(),
        };

        var newSchedule = {
            scheduleId: $("#schedule_id"),
            scheduleDate: $("#schedule_date"),
            scheduleTime: $("#schedule_time")
        };

        //send new user POST request
        $.ajax("/api/user", {
            type: "POST",
            data: newUser
        }).then(function() {
            console.log("created new user")
        })

        //send new schedule POST request
        $.ajax("/api/schedule", {
            type: "POST",
            data: newSchedule
        }).then(function() {
            console.log("created new schedule")
        });
    });

});

