function beepBoop(number) {
  let countTo = number;
  let numbersArray = [];
  for (let i = 0; i <= countTo; i++) {
    if ((i.toString()).includes(3)) {
      numbersArray.push("Won't you be my neighbor?");
    } else if ((i.toString()).includes(2)) {
      numbersArray.push("boop");
    } else if ((i.toString()).includes(1)) {
      numbersArray.push("beep");
    } else {
      numbersArray.push(i);
    }
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