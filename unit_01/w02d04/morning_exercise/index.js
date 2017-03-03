// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  // Your Code Here
  var changeInCents = (price - payment)*100;
  var changeArray = []
  // 	'Q' : 0,
  // 	'D' : 0,
  // 	'N' : 0,
  // 	'P' : 0
  // ];
  var quarters = Math.round(changeInCents/25);
  var dimes = Math.round((changeInCents - (quarters*25))/10);
  var nickels = Math.round((changeInCents - ((quarters*25) + (dimes*10))/5);
  var pennies = changeInCents - (quarters*25) - (dimes*10) - (nickels*5));
  changeArray[0] = quarters;
  changeArray[1] = dimes;
  changeArray[2] = nickels;
  changeArray[3] = pennies;
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
