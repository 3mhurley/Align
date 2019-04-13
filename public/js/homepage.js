// Homepage
$(document).ready(function() {
  $(".modal").modal();
  $("#selectDate").datepicker({
    container: ".dropPick",
    format: "mm/dd/yyyy",
    autoClose: "true"
  });

  // $(".pushpin-nav").each(function() {
  //   var $this = $(this);
  //   var $target = $("#" + $(this).attr("data-target"));
  //   $this.pushpin({
  //     top: $target.offset().top,
  //     bottom: $target.offset().top + $target.outerHeight() - $this.height()
  //   });
  // });
});
