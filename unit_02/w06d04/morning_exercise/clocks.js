var calculate = function(hourhand, minutehand) {
	var hourhand;
	var minutehand;
	var hourhandInMinutes = (hourhand*5) + (minutehand/60)*5;
	var angleOneInDegrees = ((hourhandInMinutes - minutehand)/60)*360;
	var angleTwoInDegrees = ((minutehand - hourhandInMinutes)/60)*360;
	return [angleOneInDegrees, angleTwoInDegrees];
};

// DO NOT EDIT BELOW THIS LINE //
module.exports = {
  calculate: calculate
};
