window.onload = function() {
<<<<<<< HEAD
	var firstButton = document.getElementById('button1');
  		firstButton.addEventListener("click", function() {
  		alert('you have clicked button one');
  	});
  	
  	var firstButton1 = document.getElementById('button2');
  		firstButton1.addEventListener("click", function() {
  		var p = document.createElement("P");
  		var i = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
  		p.appendChild(i);
  		document.getElementById('information').appendChild(p);
  	});

  	var firstButton2 = document.getElementById('button3');
  		firstButton2.addEventListener("click", function() {
  			var b = document.getElementById('information');
  			var p = document.getElementsByTagName('p')[0];
  			b.removeChild(p);
  	});
=======
>>>>>>> 8d1d37730514d4121bae9ab133acfe8500e444a7
}
