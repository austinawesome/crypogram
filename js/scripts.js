var cleanSentence = function(inputFromUser) {
  var input1 = inputFromUser;
  var string = input1.replace(/\s+/g, '');
  var stringArray = string.split();
  var howLong = parseInt(string.length);
  var dimensions = Math.ceil(Math.sqrt(howLong));

  var solved = "";
  masterArray = [];
  index1 = 0;
  index2 = dimensions;
  for (i = 0; i <= dimensions; i++) {
    masterArray[i] = string.slice(index1, index2);
    index1 = index1 + dimensions - 1;
    index2 = index2 + dimensions - 1;
  }
  count = 0;
  for (i = 0; i < masterArray.length; i++) {
    for (e = 0; e < masterArray[i].length - 1; e++) {
      current = masterArray[e];
      solved = solved.concat(current[i]).toString();
      count++
      if (count === 5) {
        solved = solved.concat(" ");
        count = 0;
      }
    }
  }
  return solved;
};





$(document).ready(function() {
  $("form#form-whole").submit(function(event) {
    event.preventDefault();
    var inputFromUser = $("#message").val();
    var output = cleanSentence(inputFromUser);

    $("#result").text("<p>" + output + "</p>");
  });
});