# Project-0-RacingGame

First push comment:
Initialized Github repo on git hub and cloned it to local repo. Created index.html, style.css into style folder, app.js to script folder and imges folder to host images. Also included Jquery and bootstrap CDN and added sanity checks to make sure that all files and folders are connected and working.

Second push comment:
Created a row in index.html and filled it with two, 12 single columns to move an object from start to finish. Added border for sanity check.

Assigned track id's to both div row's. lunar earth background attached and also rockets placed on both divs.

Created an event listener for both tracks. For now k is the press key for player one and s is the press key for player two. Small k code is 75 and capital k key code is 107. Small s === 83 and S === 115.

Third push comment:
I have changed the whole game logic, I was thinking to GET the col-md-1 as an array and use for or forEach loop to iterate through the col-md-1 array but it gives back the object. So, I am trying to create animation logic. Just only one row, and GETing player1 class via jquery and moving player1 div class. Next, Define the wining function and countdown function.

Fourth comment:
Added the rest button and fixed some padding issues. Also Fixed the width of screen but rockets (img) are still going outside the screen.

Fifith comment (restart button added);
Restart button added and function reload also added to reset the game board.

Sixth commit(Win function and clean up);
Set few wining conditions to track the position of img(rocket) and at curtain point announce the winner or tie. but this function is not working so far. Also removed redundant code.

Last comment for today (Working winConditions):
Wining conditions are very straight forward and easy. winConditions function track the position and at the end of screen width decides the winner. But every time I tried the game rockets break the container and row's and go far right on page. For a while, I thought it's some sort of div bug. I tried to fix div size but in vain. After 3 hours I invoked the winConditions() inside moveRight function and boooom, win logic is working.