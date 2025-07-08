// Add custom JavaScript here
function runTypingText() {
  const text = "I am Kiran Bharam";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 200;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTypingText);
