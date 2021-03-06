# _Mr. Robogers Neighborhood_

#### _A funny little robot who always counts his own way, current as of Jan 22th, 2021._

#### By _**Taylor Baker**_

<img src="img/" style="max-width:360px;">

## Description

_A funny little robot who always counts his own way. Enter a number and Mr. Roboger will count to that number. The only difference between him counting and you counting is that any number with a 1 in it, he will say "beep", any number with a 2 in it, he will say "boop", and any number with a 3 in it, Mr. Roboger will say "Won't you be my neighbor?"_

## Setup/Installation Instructions

_There are two ways to view this project:_

### Visual Studio Setup Instructions

_First you'll need to download and install visual studio code onto your workstation._

1. Visit the [VS Code website](https://code.visualstudio.com/) and download the latest version of VS code.

2. Click on the downloaded file in your browser and go through the installation instructions. Simply click "next" and "continue" through the instructions until the installation is complete.

3. Clone this repository from GitHub using this [link](https://github.com/Taylor-Baker/Mr-Robogers-Neighborhood.git).

4. Open the files in VS Code and view the page in the default web browser. Or, once the cloned repository is on your machine, locate the files and double click on index.html to open in the default web browser.

_Note: If you do not know how to clone down a repository, instructions on how to do so can easily be found online._

### View on gh-pages

_Viewing in gh-pages is much easier. Simply click on the link below to preview the project in it's entirety:_

* _https://Taylor-Baker.github.io/Mr-Robogers-Neighborhood_

## Known Bugs

_There are no known bugs at this time. If you find an issue and would like to report it, please contact the developer via the information provided below._

## Contact Us

_For any questions, comments, or to report a bug, please contact the developer at:_

* _<taylorbaker.coding@gmail.com>_

## Technologies/Liscensing

### Languages

* _HTML_
* _CSS_
* _JavaScript_

### Libraries

* _Bootstrap_
* _jQuery_

### Tools

* _GitBash_
* _Visual Studio Code_
* _Google Chrome_

## Specs
```
Describe: beepBoop()

Test 1: 'It will create an array of numbers.'
Expect(beepBoop(20)).toEqual([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

Test 2: 'It will replace all 3s with "won't you be my neighbor?"'
Expect(beepBoop(20)).toEqual([0,1,2,Won't you be my neighbor?,4,5,6,7,8,9,10,11,12,Won't you be my neighbor?,14,15,16,17,18,19,20]);

Test 3: 'It will replace all 2s with "boop".'
Expect(beepBoop(20)).toEqual([0,1,boop,Won't you be my neighbor?,4,5,6,7,8,9,10,11,boop,Won't you be my neighbor?,14,15,16,17,18,19,boop]);

Test 4: 'It will replace all 1s with "beep".'
Expect(beepBoop(20)).toEqual([0,beep,boop,Won't you be my neighbor?,4,5,6,7,8,9,beep,beep,boop,Won't you be my neighbor?,beep,beep,beep,beep,beep,beep,boop]);
```

### License

*This product is licensed under the **MIT** license.*

Copyright (c) 2021 **_Taylor Baker_**