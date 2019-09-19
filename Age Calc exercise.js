let startButton = document.getElementById("start");
let fillArea = document.getElementById("userinput");
fillArea.style.display = "none";

startButton.addEventListener("click", function() {
  startButton.style.display = "none";
  fillArea.style.display = "block";
});

const calcAge = () => {
  let result;
  let age = document.getElementById("agebox").value;
  if (age < 0 || age == "" || isNaN(age)) {
    window.alert(`You need positive integers to calculate days lived`);
    return;
  } else if (age > 200) {
    window.alert(`Are you that old?`);
    return;
  } else {
    age *= 365;
    result = `You have lived ${age} days on Earth`;
  }

  document.getElementById("dayslived").innerHTML = result;
};
