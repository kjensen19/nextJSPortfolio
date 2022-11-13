---
title: 'Server Side Calculator or a start of sorts'
date: '2022-09-05'
img: '/images/calcImg.png'

---
    This is the first project I built that was, at least nominally, fullstack...With a server...and routes! At the time the project and the logic seemed incredibly complicated, trying to weave Javascript together with HTTP requests felt strange, in the sense that it was sometimes hard to understand why one thing worked and another failed, they seemed so similar. It was, like learning any new skill, sometimes painful and uncomfortable but also, at times, exhilarating and deeply satisfying. I learned that solving (and sometimes creating) problems with code was a thing that had (and still has) hooked me. 
    It is weird trying to think back to that weekend and remember how I felt through the process, because I know there were moments of frustration but they pale in comparison to the dopamine rush of the highs. Eight weeks (at the time of this writing) later it is incredible to think about all the other tools I could bring to a task like this one and the ways I would clean up and shorten the code, the issues that seemed so insurmountable then that could be easily resolved.
    When I deployed this to Heroku I shared the link with a few friends, they immediately broke it (text overflows) and/or took pictures of their screen upside down spelling words on the calculator display like mature adults. Seeing the things that didn't work sucked, but it was still really cool to see them interacting with something I built and using it for some purpose, even a juvenile one.

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