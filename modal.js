$(document).ready(function() {
  $(".modal").modal();
  $("#selectDate").datepicker({
    container: ".dropPick",
    format: "mm/dd/yyyy",
    autoClose: "true"
  });
});
