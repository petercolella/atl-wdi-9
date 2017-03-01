// Question 1
function maxOfTwoNumbers(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else if (num2 > num1) {
		return num2;	
	}
}

// Question 2
function maxOfThree(num1, num2, num3) {
	max = num1;
	if (num2 > num1) {
		max = num2;
	} if (num3 > num2) {
		max = num3;
	}
	return max;
}

// Question 3
function isCharacterAVowel(string1) {
	switch (string1.toLowerCase()) {
		case ('a'):
			return true;
		case ('e'):
			return true;
		case ('i'):
			return true;
		case ('o'):
			return true;
		case ('u'):
			return true;
		default:
			return false;
	}	
}

// Question 4
function sumArray(array1) {
	var sum = 0;
 	for (var i = 0; i < array1.length; i++) {
 		sum += array1[i];
 	}
 	return sum;
}


// Question 4
function multiplyArray(array1) {
	var product = 1;
	for (var i = 0; i < array1.length; i++) {
		product *= array1[i];
	}
	return product;
}


// Question 5
var numberOfArguments = function() {
  return arguments.length;
}



// Question 6
var reverseString = function (string1) {
  var newString = "";
  for (var i = string1.length - 1; i >= 0; i--)  {
  	newString += string1.charAt(i);
  }
  return newString;
};


// Question 7
function findLongestWord (array1) {
  var longestLength = 0;
  for (var i = 0; i < array1.length; i++) {
  	if (array1[i].length > longestLength) {
  		longestLength = array1[i].length;
  	}
  }
  return longestLength;
}


// Question 8
function filterLongWords (array1, i) {
  var newArray = [];
  for (var x = 0; x < array1.length; x++) {
  	if (array1[x].length > i) {
  		newArray.push(array1[x]);
  	}
  }
  return newArray;
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}

