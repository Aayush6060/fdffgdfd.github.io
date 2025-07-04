let input = "";
const sound = document.getElementById("clickSound");

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
      eval(input); // Evaluate without showing result
      showLove();
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

function showLove() {
  updateDisplay("I LOVE YOU Na BABYYY ❤️", "Jaannn maan bhi jao ab ❤️", "mala fakt tuchh havi an babe 🥰" " kalyani maannn jao an yr ❤️");
  burstHearts();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Falling Hearts
const heartsContainer = document.getElementById('hearts');
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${Math.random() * 20 + 10}px`;
  heart.innerHTML = "❤️";
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}, 300);

// Burst hearts on love
function burstHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
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
