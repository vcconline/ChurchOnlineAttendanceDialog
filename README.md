# Church Online Attendance Dialog
Attendance dialog for the Church Online Platform (free live church platform by Life.Church https://churchonlineplatform.com/)
## Description
Add a popup dialog to capture attendance when users go to your Church Online instance. 

![Attendance Dialog](/attendance-dialog.png)

At the time of this writing, the Church Online Platform does not provide a way of capturing the number of people who may be watching on a single session. This project allows you to fill that gap by creating a popup dialog which prompts the user for the number of people watching, and then sends that data to Google Analytics. The data can then be rolled up in a Google Data Studio report, or directly in Google Analytics.

## Step 1 - Adding the CSS
You will first need to add the attendance dialog's CSS ([dialog.css](/dialog.css)) to your theme's Stlyesheet tab. Don't replace the existing CSS shown in the tab, but rather add the dialog's css to it (adding to the top is easiest).

## Step 2 - Adding the HTML
The next step is adding the dialog HTML ([dialog.html](/dialog.html)) to your theme's Template tab. Copy and paste the dialog code right before the `<footer` element. You can also customize this code to change the attendance prompt, the button numbers, or what values are sent to the javascript function.

## Step 3 - Adding the Javascript

## Step 4 - Reporting
