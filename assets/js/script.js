function getTime() {
// get current date and display at top of page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
};
// color time blocks and start interval to check color every minute
  colorizeTime();
  setInterval(colorizeTime, 60000);




function colorizeTime() {
    // for each time block
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
      var currentHour = parseInt(moment().format("H"));
      // remove any class we may have added before
      $(this).removeClass("past present future");
      // color block based on past, present, future class
      if (blockHour < currentHour) {
        $(this).addClass("past"); 
      } else if (blockHour > currentHour) {
        $(this).addClass("future"); 
      } else {
        $(this).addClass("present");
      }
    });
  };

getTime();

