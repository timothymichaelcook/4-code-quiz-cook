# API Code Quiz Challenge :

This app is a lightweight timed coding quiz with multiple-choice questions. By using DOM manipulation, JavaScript, Bootstrap, and the web browsers API local storage this app can challenge users to their knowledge of JavaScript. This app will run in the browser, and features a dynamically updated HTML and CSS powered by JavaScript code. The UI has a clean, polished, and responsive feel as user navigate through JavaScript based questions. Once the quiz has finished, the user can enter in their initials and save their high score on the scoreboard. The quiz settings can be adjusted and saved to user preference. Local storage store user initials, score, and settings. Settings can adjust the amount of seconds the quiz take to complete, and change the difficulty by changing the amount of time is taken away with each question wrong. This project shows how to work with API's to create functioning apps.

## Table of Contents

* [Overview](#overview)
* [Credits](#credits)
* [License](#license)

## Overview

Project Link: https://kopelson.github.io/APICodeQuizChallenge/

### Quiz
![main](https://user-images.githubusercontent.com/57735283/94205774-d3bb0080-fe78-11ea-8dad-f0ed1b8773ae.gif)

  <p>To start the quiz the user hits the "Start Quiz" button! The quiz timer begins to count down and presents the user with a random question. Each question has one correct answer and 3 randomly drawn incorrect answers to choose from. ***Please note a correct answer could be displayed twice but both will count as correct if chosen. The beginning quiz settings is set at quiz timer 75 seconds, and each incorrect answer will deduct the quiz time by 5 seconds. Each correct answer will add one point to the users score.</p>    

### Submit Initials 
![end](https://user-images.githubusercontent.com/57735283/94205781-d61d5a80-fe78-11ea-8db9-9130c0ce1fa3.gif)

<p>When the timer reaches 0 seconds the quiz ends. The user is prompted to enter in their initials. Once submitted a high score page loads with a table showing users initials and score.</p>

### Change Quiz Settings
![settings](https://user-images.githubusercontent.com/57735283/94205785-d87fb480-fe78-11ea-8afc-f834fe6d5d2b.gif)

<p>On the high score page, the user can change the quiz settings by selecting the settings icon on the top right. This will pull up a modal that can adjust quiz length and difficulty. Each difficulty adds a 5 more seconds to incorrect answers. Once the user hits save, the modal will close and settings are stored in browsers local storage. The next quiz that is played will use these saved settings.</p>

### Local Storage
![storage](https://user-images.githubusercontent.com/57735283/94205790-da497800-fe78-11ea-93a5-b45280ff4025.gif)

<p> Using the browsers api local storage, users initials and scores can be saved. This means the user can refresh or even change pages without losing their high scores! </p>

### DOM Manipulation
![table](https://user-images.githubusercontent.com/57735283/94205795-dc133b80-fe78-11ea-806e-19d8b9fe1e05.gif)

<p>Using DOM manipulation through JavaScript code, the UI can be changed on the fly. The user can also clear their high scores and the browser will refresh with an empty list.</p>

## Credits

### JavaScript.Info
link to tutorial on how to shuffle an array: https://javascript.info/task/shuffle

### JavaScriptTutorial.net
Link to tutorial on how to remove all children elements: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/

### W3Schools.com
Link to tutorial on sounds in javascript: https://www.w3schools.com/graphics/game_sound.asp

### SoundSilk.com
Link to incorrect answer sound: https://soundsilk.com/wrong-answer-buzzer-royalty-free-sound-effect/ <br/>
Link to correct answer sound: https://soundsilk.com/gameshow-correct-answer-ding/

## License

### MIT License

Copyright (c) 2020 Ken Kopelson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges
<a href="https://img.shields.io/badge/CSS-4.2%25-purple"><img alt="CSS usage" src="https://img.shields.io/badge/CSS-4.2%25-purple"></a> <a href="https://img.shields.io/badge/HTML-18.8%25-red"><img alt="HTML usage" src="https://img.shields.io/badge/HTML-18.8%25-red"></a> <a href="https://img.shields.io/badge/JavaScript-77.0%25-yellow"><img alt="Javascript usage" src="https://img.shields.io/badge/JavaScript-77.0%25-yellow"></a> <a href="https://img.shields.io/badge/Frameworks-Bootstrap-blue"><img alt="Bootstrap framework" src="https://img.shields.io/badge/Frameworks-Bootstrap-blue"></a>
