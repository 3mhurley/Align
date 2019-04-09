$(document).ready(function() {




    var newSchedule = {
        
    }

})


//on submit, add new entry to db
$("#submit-btn").on("click", function(event){
    event.preventDefault();

  var newTime = {
    id: $("#id").val().trim(),
    fullName: $("#full_name").val().trim(),
    timePeriod: $("#time_period").val().trim()
  };

  $.post("/api/new", newTime)
  .done(function(data){
      console.log(data);
  });

  $("#id").val("");
  $("#full_name").val("");
  $("#time_period").val("");
});


//render data to page --- should be in new file
$("#submit-btn").on("click", function(event){
    event.preventDefault();

    var suggestedTimes = $("#suggested-times").val().trim();

    $.get("/api/" + suggestedTimes, function(data){
        renderTimes(data);
    });
});

function renderTimes(data) {
    if (data.length !== 0) {
        $("#stats").empty();
        $("#stats").show();

        for (var i = 0; i<data.length; i++){
            var div = $("<div>");

            div.append("<h2>" + data[i].title + "<h2>");
            div.append("<p>Author: " + data.author + "<p>");

            $("#stats").append(div);
        }
    }
}

// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
// 
// jQuery-UI
// $( function() {
//   $( "#selectable" ).selectable();
// } );


// var result = $("#select-result").empty();
//   $(".ui-selected", this).each(function() {
//     result.append($(this).text());
//   })

  //https://stackoverflow.com/questions/47235478/how-to-get-selected-option-data-attribute-in-multiple-select-option?noredirect=1&lq=1
  // $('#selections').on('change', function() {
  //   var selected = $(this).find('option:selected', this)
  //   var results = [];

  //   selected.each(function() {
  //     results.push($(this).data('available_text'))
  //   });
  //   console.log(results)
  // });




// function Input (monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
//   this.monday = monday;
//   this.tuesday = tuesday;
//   this.wednesday = wednesday;
//   this.thursday = thursday;
//   this.friday = friday;
//   this.saturday = saturday;
//   this.sunday = sunday;
// }





// var calendar = new calendar(calendarEl, {
//   timeZone: 'UTC',
//   events: [
//     {
//       id: '',
//       title: '',
//       user: '',
//       start: '',
//       end: ''
//     }
//   ]
// })
//event object
// var event = calendar.getEventById('');
//a property (date object)
// var start = event.start;
//
// console.log(start.toISOString());