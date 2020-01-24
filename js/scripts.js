// Back-end Logic
var getNumberRange = function(input) {
  var numberRange = [];
  for (var i = 0; i <= input; i++) {
    numberRange.push(i.toString());
  }
  return numberRange;
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

var replaceThrees = function(rangeArray) {
  for (var j = 0; j < rangeArray.length; j++) {
    if (checkForThrees(rangeArray[j]) === true) {
      rangeArray[j] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else {
      continue;
    }
  }
  return rangeArray;
}


// Front-end Logic
$(document).ready(function() {
  $("#beepBoopForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var rangeOfNumbers = getNumberRange(userInput);

    console.log(replaceThrees(rangeOfNumbers));
    console.log(replaceTwos(rangeOfNumbers));
    console.log(replaceOnes(rangeOfNumbers));

    // Enter finalOutput below:
    // var finalOutput = ;
    // $("#output").text(finalOutput).show();
  })
});