
$(document).ready(function() {
    
    //add new calendar
    $(".create-calendar").on("submit", function(event) {
        event.preventDefault();

        var calendar = new Calendar(calendarEl, {
            events: [
                {
                    id: '',
                    title: '',
                    start: ''
                },
            ]
        });

        //send POST request
        $.ajax("/api/calendar", {
            type: "POST",
            data: calendar
        }).then(function() {
            console.log("added new calendar");
        });
    });
    
});