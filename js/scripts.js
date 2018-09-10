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

var honeycups2grams = function(cups) {
  return cups * 340
};

var chocochips2cups = function(cups) {
  return cups * 175
};

var tempconversion = function(temp) {
  return (temp - 32) * (5/9)
};

$(document).ready(function() {
  $("form#gallonsform").submit(function(event) {
    event.preventDefault();
    var gallonsnum = parseInt($("input#gallons").val());
    var litersresult = gallons2Liters(gallonsnum);
    $("span.litersresult").text(litersresult + " liters");
  });
  $("form#cupstoml").submit(function(event) {
    event.preventDefault();
    var cupsnum = parseInt($("input#cups").val());
    var milliletersresult = cups2Ml(cupsnum);
    $("span.milliletersresult").text(milliletersresult + " millileters")
  });
  $("form#flourcups").submit(function(event) {
    event.preventDefault();
    var cupsnum = parseInt($("input#cupsFlour").val());
    var gramsresult = flour2Grams(cupsnum);
    $("span.cupsFlourResult").text(gramsresult + " grams");
  });
  $("form#sugarcups").submit(function(event) {
    event.preventDefault();
    var cupsnum = parseInt($("input#cupsSugar").val());
    var gramsresult = sugar2grams(cupsnum);
    $("span.cupsSugarresult").text(gramsresult + "grams");
  });
  $("form#buttertbsp").submit(function(event) {
    event.preventDefault();
    var tbspnum = parseInt($("input#butter").val());
    var gramsresult = butter2grams(tbspnum);
    $("span.butterresult").text(gramsresult + " grams");
  });
  $("form#honeycups").submit(function(event) {
    event.preventDefault();
    var cupsnum = parseInt($("input#honeycups").val());
    var gramsresult = honeycups2grams(cupsnum);
    $("span.honeyresult").text(gramsresult + " grams");
  });
  $("form#chips").submit(function(event) {
    event.preventDefault();
    var cupsnum = parseInt($("input#chipscups").val());
    var gramsresult = chocochips2cups(cupsnum);
    $("span.chipsresult").text(gramsresult + " grams");
  });
  $("form#ovenTemp").submit(function(event){
    event.preventDefault();
    var fTemp = parseInt($("input#temp").val());
    var cTemp = tempconversion(fTemp);
    $(".tempresult").text(cTemp + " degrees Celsius");
  });

});
