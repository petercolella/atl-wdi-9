// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
    this.millisecs += 10;
    if (this.millisecs >= 1000) {
      this.millisecs = 0;
      this.secs++;
      if (this.secs >= 60) {
        this.secs = 0;
        this.mins++;
      };
    };
    // Your Code Here
  },
  reset: function() {
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];
    // Your Code Here
  },
  start: function() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.tickClock();
    }
    // Your Code Here
  },
  stop: function() {
    if (this.isRunning) {
      this.isRunning = false;
    }
    // Your Code Here
  },
  lap: function() {
    if (this.isRunning) {
      this.laps.push({
        mins: this.mins,
        secs: this.secs,
        millisecs: this.millisecs
      })
    }
    // Your Code Here
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
    document.getElementById('mins').innerHTML = ViewHelpers.zeroFill(mins, 2);
    document.getElementById('secs').innerHTML = ViewHelpers.zeroFill(secs, 2);
    document.getElementById('millisecs').innerHTML = ViewHelpers.zeroFill(millisecs/10, 2);
    // Your Code Here
  },
  updateLapListDisplay: function(laps) {
    for (var i = 0; i < laps.length; i++) {
      Stopwatch.laps = [];
    document.getElementById('lap-list').innerHTML += "<li>" + ViewHelpers.zeroFill(laps[i].mins, 2) + ':' + ViewHelpers.zeroFill(laps[i].secs, 2) + ':' + ViewHelpers.zeroFill(laps[i].millisecs/10, 2) + "</li>";
    }
    // Your Code Here
  },
};
const ViewHelpers = {
  zeroFill: function(number, length) {
    var numberToString = number.toString();
    if (numberToString.length < length) {
      numberToString = '0' + number;
    }
    return numberToString;
    // Your Code Here
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
    // Your Code Here
  },
  handleClickStart: function() {
    if (!Stopwatch.isRunning) {
      Stopwatch.start();
    }
    // Your Code Here
  },
  handleClickStopReset: function() {
    if (Stopwatch.isRunning) {
      Stopwatch.stop();
    } else {
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(0, 0, 0);
      var myNode = document.getElementById("lap-list");
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
    }
    // Your Code Here
  },
  handleClickLap: function() {
    if (Stopwatch.isRunning) {
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
    // Your Code Here
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  document.getElementById('start').onclick = AppController.handleClickStart;
  document.getElementById('lap').onclick = AppController.handleClickLap;
  document.getElementById('stop').onclick = AppController.handleClickStopReset;
  

};
