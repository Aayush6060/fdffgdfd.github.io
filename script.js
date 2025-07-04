let input = "";
let sound = document.getElementById("clickSound");

function press(value) {
  sound.currentTime = 0;
  sound.play();

  if (value === "C") {
    input = "";
    updateDisplay("0", "");
  } else if (value === "DEL") {
    input = input.slice(0, -1);
    updateDisplay(input || "0", "");
  } else if (value === "=") {
    try {
      eval(input); // perform calculation internally
      updateDisplay("I LOVE YOU BABYYY ❤️", "Jaannn maan bhi jao ab ❤️");
      input = "";
    } catch {
      updateDisplay("Error", "");
    }
  } else {
    input += value;
    updateDisplay(input, "");
  }
}

function updateDisplay(line1, line2) {
  document.getElementById("message1").textContent = line1;
  document.getElementById("message2").textContent = line2;
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
