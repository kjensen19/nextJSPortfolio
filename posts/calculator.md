---
title: 'Server Side Calculator or a start of sorts'
date: '2022-09-05'
---

**Server Side Calculator** A basic calculator designed to collect inputs on the client side, send them to the server where the calculations are done and the results are sent back and rendered to the DOM. Can conduct basic math as well as follow basic calculator logic. Potential issues were addressed throughout development: 
- **Logic** was added to handle multiple operator presses in a manner consistent with what most users would desire (the last operator pressed is the active one). 
- **A** check was added to handle attempting to enter multiple decimal points in one string of numbers. Initially considered disabling the button, but settled on checking the string before adding one. 
- **If** the user presses an operator after the answer is displayed that value is taken as the first part of the next equation, otherwise if a number is pressed the value is changed to that number. 
- **Post** function checks to ensure there are two value strings before sending to the server and generates an error message if the criteria are not met. 
- **Data** is passed to the server where the strings are converted to numbers and the correct operator is applied through an if/else. The resulting data is added to the historical data object and sent back to the client. 
- **Client** then displays the data on the DOM
- **Historical Equations** are clickable and when clicked set the screen (and current string value) to the equation answer. 
- **C** (no, not that C) clears current inputs and AC clears all data both current and historical on the server (via a delete request)


https://github.com/kjensen19/server-side-calculator