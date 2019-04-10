
$(document).ready(function() {
    
    //add new calendar
    $(".create-calendar").on("submit", function(event) {
        event.preventDefault();

        var calendar = new Calendar(calendarEl, {
            events: [
                {
                    id: $('#id').val(),
                    start: $('#start').val(),
                    end: $("#end").val(),
                },
            ]
        });

        //send POST request
        $.ajax("/api/calendar", {
            type: "POST",
            data: calendar
        }).then(function() {
            console.log("added new calendar");
            location.reload();
        });
    });
  
});
