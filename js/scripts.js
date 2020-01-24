// Back-end Logic
var getNumberRange = function(input) {
  var numberRange = [];
  for (var i = 0; i <= input; i++) {
    numberRange.push(i.toString());
  }
  return numberRange;
}

var checkName = function(name) {
  if (name === "") {
    return name = "Dave";
  } else {
    return name;
  }
}

var checkNumber = function(number) {
  if (isNaN(number) === true) {
    return number = 3;
  } else {
    return number;
  }
}

var checkForOnes = function(number) {
  var ones = /[1]/gm;
  if (number.match(ones)) {
    return true;
  } else {
    return false;
  }
}

var checkForTwos = function(number) {
  var twos = /[2]/gm;
  if (number.match(twos)) {
    return true;
  } else {
    return false;
  }
}

var checkForThrees = function(number) {
  var threes = /[3]/gm;
  if (number.match(threes)) {
    return true;
  } else {
    return false;
  }
}

var replaceOnes = function(rangeArray) {
  for (var j = 0; j < rangeArray.length; j++) {
    if (checkForOnes(rangeArray[j]) === true) {
      rangeArray[j] = "Beep!";
    } else {
      continue;
    }
  }
  return rangeArray;
}

var replaceTwos = function(rangeArray) {
  for (var j = 0; j < rangeArray.length; j++) {
    if (checkForTwos(rangeArray[j]) === true) {
      rangeArray[j] = "Boop!";
    } else {
      continue;
    }
  }
  return rangeArray;
}

var replaceThrees = function(rangeArray, inputName) {
  for (var j = 0; j < rangeArray.length; j++) {
    if (checkForThrees(rangeArray[j]) === true) {
      rangeArray[j] = "I'm sorry, " + inputName + ". I'm afraid I can't do that.";
    } else {
      continue;
    }
  }
  return rangeArray;
}

var checkAndReplace123 = function(inputArray, inputName) {
  replaceThrees(inputArray, inputName);
  replaceTwos(inputArray);
  replaceOnes(inputArray);
  return inputArray;
}

var reverseOutput = function(outputArray) {
  return outputArray.reverse();
}

// Front-end Logic
$(document).ready(function() {
  $("#buttonOriginal").click(function(event) {
    event.preventDefault();
    var userName = checkName($("#userName").val());
    var userInput = checkNumber(parseInt($("#userInput").val()));
    var rangeOfNumbers = getNumberRange(userInput);
    var output = checkAndReplace123(rangeOfNumbers, userName);
    $("#output").text(output.join(", ")).show();
  })

  $("#buttonReverse").click(function(event) {
    event.preventDefault();
    var userName = checkName($("#userName").val());
    var userInput = checkNumber(parseInt($("#userInput").val()));
    var rangeOfNumbers = getNumberRange(userInput);
    var output = reverseOutput(checkAndReplace123(rangeOfNumbers, userName));
    $("#output").text(output.join(", ")).show();
  })
});