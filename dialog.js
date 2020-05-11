/*dialog begin*/
//Check to see if we should show the attendance dialog
function checkShowDialog()
{
   //Check local storage to see if we need to show dialog
  var hours = 1; // Reset when storage is more than 24hours
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  var dialogAns = localStorage.getItem('dialogAns');
  
  if (setupTime == null) 
  {
      localStorage.setItem('setupTime', now)
      $('#dialog').show();
  } 
  else 
  {
      if(now - setupTime > 4500000)
      {
          localStorage.clear()
          localStorage.setItem('setupTime', now);
          $('#dialog').show();
      }
      else
      {
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
/*dialog end*/
