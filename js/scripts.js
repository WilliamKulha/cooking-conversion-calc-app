var gallons2Liters = function(gallons) {
	return gallons * 3.785;
};

var cups2Ml = function(cups) {
	return cups * 236.588;
};

var flour2Grams = function(cups) {
  return cups * 141.60
};

var sugar2grams = function(cups) {
  return cups * 199.42
};

var butter2grams = function(tablespoons) {
  return tablespoons * 14.18
};

var honeygram2cups = function(cups) {
  return cups * 340
};

var chocochips2cups = function(cups) {
  return cups * 175
};

var tempconversion = function(temp) {
  return (temp - 32) * (5/9)
};

$(document).ready(function(){
  $("form#gallonsform").submit(function(event){
    event.preventDefault();
    var gallonsnum = parseInt($("#gallons").val());
    var litersresult = gallons2Liters(gallonsnum);
    $("span.litersresult").text(litersresult + " liters");
  });
  $("form#cupstoml").submit(function(event){
    var cupsnum = parseInt($("#cups").val());
    var milliletersresult = cups2Ml(cupsnum);
    $("span.milliletersresult").text(milliletersresult + " millileters")
  });

});
