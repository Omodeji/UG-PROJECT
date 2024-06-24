let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

function togglePassword() {
  let passwordField = document.getElementById("password");
  let confirmPasswordField = document.getElementById("confirm-password");
  let toggleText = document.getElementById("visible");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    confirmPasswordField.type = "text";
    toggleText.innerHTML = "Hide Password";
  } else {
    passwordField.type = "password";
    confirmPasswordField.type = "password";
    toggleText.innerHTML = "View Password";
  }
}

// Function to check if passwords match
function validatePasswords(event) {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    event.preventDefault();
    alert("Passwords do not match. Please re-enter your passwords.");
  }
}

// Attach validatePasswords function to form submit event
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("sign-up-form")
    .addEventListener("submit", validatePasswords);
});
