// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    document.getElementById('numeric-display').innerHTML = timerValue;
    10 >= timerValue ? document.getElementById('numeric-display').style.color = 'red' : "";
    var timerValueArray = [];
    for (var i = 0; i <= 100; i++) {
      timerValueArray.push(i);
    }
    var fontSizePercent;
    var fontSizeLarger = timerValue;
    switch (fontSizeLarger) {
      case 0:
        fontSizePercent = 1.55;
        break;
      case 1:
        fontSizePercent = 1.50;
        break;
      case 2:
        fontSizePercent = 1.45;
        break;
      case 3:
        fontSizePercent = 1.40;
        break;
      case 4:
        fontSizePercent = 1.35;
        break;
      case 5:
        fontSizePercent = 1.30;
        break;
      case 6:
        fontSizePercent = 1.25;
        break;
      case 7:
        fontSizePercent = 1.20;
        break;
      case 8:
        fontSizePercent = 1.15;
        break;
      case 9:
        fontSizePercent = 1.10;
        break;
      case 10:
        fontSizePercent = 1.05;
        break;
      default:
        fontSizePercent = 1;
    }
    document.getElementById('numeric-display').style.fontSize = ((fontSizePercent*1.5) + 'em');
    // Your Code Here
  },
  drawProgressBars: function(timerValue){
    document.getElementsByClassName('progress-bar')[0].style.width = ((100 - timerValue) + '%');
    // Your Code Here
  },
  drawLitFuses: function(timerValue){
    document.getElementsByClassName('unburnt')[0].style.width = ((timerValue * 0.98) + '%');
    document.getElementsByClassName('burnt')[0].style.width = ((0.98*(100 - timerValue)) + '%');
    // Your Code Here
  },
  drawCrawlers: function(timerValue){

    document.getElementsByClassName('crawler')[0].style.marginLeft = ((100 - timerValue)*10 + 'px');
    document.getElementsByClassName('crawler')[0].style.marginTop = ((timerValue%2)*10 + 'px');
    document.getElementsByClassName('crawler')[0].style.marginBottom = (((timerValue - 1)%2)*10 + 'px');
    // Your Code Here
    //The crawler will make it all the way if the screen is 1000px or less wide.
  }
};
