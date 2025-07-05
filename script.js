// romantic-calculator.js

let input = "";
const heartsContainer = document.getElementById("hearts");

function press(value) {
  if (value === "C") {
    input = "";
    updateDisplay("0", "", "", "");
  } else if (value === "DEL") {
    input = input.slice(0, -1);
    updateDisplay(input || "0", "", "", "");
  } else if (value === "=") {
    try {
      const result = eval(input);
      showLove();
      input = result.toString();
    } catch {
      updateDisplay("Error", "", "", "");
    }
  } else {
    input += value;
    updateDisplay(input, "", "", "");
  }

  createRandomHeart();
}

function updateDisplay(line1, line2, line3, line4) {
  document.getElementById("message1").textContent = line1;
  document.getElementById("message2").textContent = line2;
  document.getElementById("message3").textContent = line3;
  document.getElementById("message4").textContent = line4;
}

function showLove() {
  updateDisplay(
    "I LOVE YOU Na BABYYY ❤️",
    "Jaannn maan bhi jao ab ❤️",
    "mala fakt tuchh havi an babe 🥰",
    "maannn jao an ❤️❤️"
  );
  burstHearts();
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function createRandomHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 15 + 10}px`;
  heart.innerHTML = "❤️";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

function burstHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${50 + (Math.random() - 0.5) * 100}%`;
    heart.style.top = `50%`;
    heart.style.fontSize = `${Math.random() * 20 + 15}px`;
    heart.style.animation = 'fall 1s ease-out forwards';
    heart.style.opacity = 1;
    heart.innerHTML = "💖";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }
}

// Continuous falling hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 20 + 10}px`;
  heart.innerHTML = "❤️";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 300);

// Exit message for Kalyani
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "Kalyani, you are the most special part of this calculator ❤️";
});
