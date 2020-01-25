// Back-end Logic
var checkName = function(name) {
  return (name === "" ? name = "Dave" : name);
}

var checkNumber = function(number) {
  return (isNaN(number) ? number = 3 : number);
}

var checkAndReplace123 = function(inputNumber, inputName) {
  var rangeArray = [];
  var ones = /[1]/gm;
  var twos = /[2]/gm;
  var threes = /[3]/gm;

  for (var j = 0; j <= inputNumber; j++) {
    var k = j.toString();
    if (k.match(threes)) {
      rangeArray[j] = "I'm sorry, " + inputName + ". I'm afraid I can't do that.";
    } else if (k.match(twos)) {
      rangeArray[j] = "Boop!";
    } else if (k.match(ones)) {
      rangeArray[j] = "Beep!";
    } else {
      rangeArray[j] = k;
    }
  }
  return rangeArray;
}

var reverseOutput = function(outputArray) {
  return outputArray.reverse();
}

// Front-end Logic
$(document).ready(function() {
  $("#buttonOriginal").click(function(event) {
    event.preventDefault();
    var userName = checkName($("#userName").val());
    var userNumber = checkNumber(parseInt($("#userNumber").val()));
    var output = checkAndReplace123(userNumber, userName);
    $("#output").text(output.join(", ")).show();
  })

  $("#buttonReverse").click(function(event) {
    event.preventDefault();
    var userName = checkName($("#userName").val());
    var userNumber = checkNumber(parseInt($("#userNumber").val()));
    var output = reverseOutput(checkAndReplace123(userNumber, userName));
    $("#output").text(output.join(", ")).show();
  })
});