var gallons2Liters = function(gallons) {
	return gallons * 3.785;
};

var numberOfGallons = parseInt(prompt("How many gallons are you converting to liters?"));

var resultGallons2Liters = gallons2Liters(numberOfGallons);

alert(resultGallons2Liters);

//cups to ml

var cups2Ml = function(cups) {
	return cups *236.588;
};

var numberOfCups = parseInt(prompt("How many cups are you converting to mL?"));

var resultCups2Ml = cups2Ml(numberOfCups);

alert(resultCups2Ml);
