# [Beep Boop](https://github.com/ayohana/beep-boop.git/)

#### JavaScript Arrays & Looping Exercise for [Epicodus](https://www.epicodus.com/), 01.24.2020

#### By [**Adela Darmansyah**](https://ayohana.github.io/portfolio/)

## Description

![A screenshot of Beep Boop's homepage](/img/homepage.JPG)

**This web application is a game of _Beep Boop_.** It takes a name (for example, _Dave_) and a number from a user and returns a range of numbers from 0 to the user inputted number with the following rules in the order of their precedence from the lowest(1) to the highest(3):

1. Numbers that contain a "1" will be replaced with "Beep!"
2. Numbers that contain a "2" will be replaced with "Boop!"
3. Numbers that contain a "3" will be replaced with "I'm sorry, Dave. I'm afraid I can't do that."

The user will be able to enter a new number and see new results over and over again. The user can also play without entering any input as the application holds default inputs of "Dave" and the number "3". In addition, the user will be able to **_Boop Beep_** to reverse the order of the output.

## Specs

<details>
  <summary>Click to expand!</summary>

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses index.html | Homepage with user input form |
| **Program Gathers User Input** | "5" | `Console:` "5" |
| **Program Shows the Return Output** | "5" | "5" |
| **Program Returns a Range of Numbers from 0 to User Inputted Number**| "5" | "0, 1, 2, 3, 4, 5" |
| **Program Applies Rule #1: Replaces Numbers Containing a "1" with "Beep!"**| "1" | "0, Beep!" |
| **Program Applies Rule #2: Replaces Numbers Containing a "2" with "Boop!"**| "2" | "0, Beep!, Boop!" |
| **Program Applies Rule #3: Replaces Numbers Containing a "3" with "I'm sorry, Dave. I'm afraid I can't do that."**| "3" | "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that." |
| **Program Applies Precedence Levels to the Rules: <br> &nbsp;&nbsp; #1 (Lowest) <br> &nbsp;&nbsp; #2 (Middle) <br> &nbsp;&nbsp; #3 (Highest)**| "13" | "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that." |
| **Program Allows User to Reverse the Output"**| "3" | "I'm sorry, Dave. I'm afraid I can't do that., Boop!, Beep!, 0" |
| **Program Gathers User's Name and Replaces "Dave" with the User's Name**| "Amy", "3" | "0, Beep!, Boop!, I'm sorry, Amy. I'm afraid I can't do that." |
| **Program Holds Default Inputs of "Dave" and/or "3" if the User Input(s) is/are Empty.**| "", "" | "0, Beep!, Boop!, I'm sorry, Dave. I'm afraid I can't do that." |
</details>

## Setup/Installation Requirements

* Clone this [repository](https://github.com/ayohana/beep-boop.git/)
* Open `index.html` in your preferred web browser.
* _Have fun!_

Or simply click on this [link](https://ayohana.github.io/beep-boop/) to open the web application.

## Known Bugs

No known bugs at this time.

## Support and contact details

Feel free to provide feedback via email: adela.yohana@gmail.com.

## Technologies Used

* HTML
* CSS
* Bootstrap
* Google Fonts
* JavaScript
  - Arrays
  - Looping
  - Branching
* jQuery
* Markdown

### License

This webpage is licensed under the MIT license.

Copyright (c) 2020 **Adela Darmansyah**