function beepBoop(number) {
  let countTo = number;
  let numbersArray = [];
  for (let i = 0; i <= countTo; i++) {
    numbersArray.push(i);
  }
  return numbersArray;
}

$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();

    const countTo = parseInt($("input#count-to").val());

    const roboNumArray = beepBoop(countTo);

    $("#output").text(roboNumArray.join(', '));
  });
});