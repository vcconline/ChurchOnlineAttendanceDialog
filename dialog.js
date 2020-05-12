/*Copy and paste the code below into your theme's Javascript tab AFTER existing code 
  (Don't replace existing code)*/

/*Dialog Begin*/
//Check to see if we should show the attendance dialog
function checkShowDialog()
{
   //Check local storage to see if we need to show dialog
  var milliseconds = 4500000; // Reset when storage is more than 1.25 hours old (4500000 milliseconds)
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  var dialogAns = localStorage.getItem('dialogAns');
  
  //User has visited site for first time, show dialog
  if (setupTime == null) 
  {
      localStorage.setItem('setupTime', now)
      $('#dialog').show();
  } 
  else 
  {
      /*User has already visited site so check to see if its been x amount of time,
      and if so, show the dialog*/
      if(now - setupTime > milliseconds)
      {
          localStorage.clear()
          localStorage.setItem('setupTime', now);
          $('#dialog').show();
      }
      else
      {
        //User has visited before, but never answered the dialog, so show the dialog
        if(dialogAns==null)
        {
          $('#dialog').show();
        }
      }
  }
}

//Close the dialog sending the right info to GA
function sendCloseDialog(num)
{
  if(num==0)
  {
    ga('send', 'event', 'Attendance', 'Click', 'VCC Online', '1');
    ga('send', 'event', 'Attendance', 'X Click', 'VCC Online', '1');
  }
  else
  {
    ga('send', 'event', 'Attendance', 'Click', 'VCC Online',num);
  }
  $( "#dialog" ).hide();
  localStorage.setItem('dialogAns', 1);
  localStorage.setItem('setupTime', new Date().getTime());
}
/*Dialog End*/
