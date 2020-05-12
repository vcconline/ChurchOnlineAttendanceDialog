# Church Online Attendance Dialog
Attendance dialog for the Church Online Platform (free live church platform by Life.Church https://churchonlineplatform.com/)
## Description
Add a popup dialog to capture attendance when users go to your Church Online instance. 

![Attendance Dialog](/attendance-dialog.png)

At the time of this writing, the Church Online Platform does not provide a way of capturing the number of people who may be watching on a single session. This project allows you to fill that gap by creating a popup dialog which prompts the user for the number of people watching, and then sends that data to Google Analytics. The data can then be rolled up in a Google Data Studio report, or directly in Google Analytics.

## Before you begin
Before you add the dialog to your theme, be sure that Google Analytics is correctly setup for your Church Online Platform instance. The Church Online Platform has a Google Tracking Code se

## Step 1 - Modifying your theme's Stylesheet
You will first need to add the attendance dialog's CSS ([dialog.css](/dialog.css)) to your theme's Stlyesheet tab. Don't replace the existing CSS shown in the tab, but rather add the dialog's css to it (adding to the top is easiest). Be sure to save.

## Step 2 - Modifying your theme's Template
The next step is adding the dialog HTML ([dialog.html](/dialog.html)) to your theme's Template tab. Copy and paste the dialog code right before the `<footer` element. You can also customize this code to change the attendance prompt, the button numbers, or what values are sent to the javascript function. The CSS for the dialog makes sure that the dialog is hidden until the proper Javascript is added. Be sure to save.

If you don't already have Jquery and FontAwesome added to the `<head>` section in your Template, then it will need to be added now. You can copy and paste the two links from [template-head.html](/template-head.html). Be sure to save.

## Step 3 - Modifying your theme's Javascript
### Adding the code
Now its time to modify your theme's Javascript. Copy and paste the code from [dialog.js](/dialog.js) after existing code in your theme's Javascript tab. 

In order to show the dialog when an event becomes live and capture attendance of users who may be waiting before an event starts, then you will need to add a call to the `checkShowDialog()` function into the existing`app.on('event:live', function(){` trigger like this:
`app.on('event:live', function(){
  $('.co-chat-tab').trigger('click');
  checkShowDialog();//<-- call added here
});`

### Code description
The `checkShowDialog` function will cause the dialog to be shown in the following instances:
1. When the user first comes to the site
2. When the user has returned to the site after the elapsed time specified in the `milliseconds` variable
3. When the user returnes to the site, but never answered the dialog

If you wish to change the amount of time before the dialog is shown simply change the value of the `milliseconds` variable to the number of milliseconds before the dialog is shown again.

The `sendCloseDialog` function is called when a dialog number button is clicked and is responsible for sending the proper event to Google Analytics. You can modify this function to send different events/values to Google Analytics or your prefered destination.

## Step 4 - Reporting
