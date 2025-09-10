// Typing Effect
const text = ["BCA Student", "Web Developer", "Tech Enthusiast", "Football Player"];
let index = 0;
let charIndex = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  if (charIndex < text[index].length) {
    typingElement.innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  const typingElement = document.getElementById("typing");
  if (charIndex > 0) {
    typingElement.innerHTML = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % text.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Modal for certificates
function openModal(title) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = title;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside content
window.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});

// Profile Photo Upload
document.getElementById("upload-photo").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profile-photo").src = e.target.result;
      localStorage.setItem("profilePhoto", e.target.result);
    };
    reader.readAsDataURL(file);
  }
});

// Load saved photo if available
window.addEventListener("load", function () {
  const savedPhoto = localStorage.getItem("profilePhoto");
  if (savedPhoto) {
    document.getElementById("profile-photo").src = savedPhoto;
  }
});
