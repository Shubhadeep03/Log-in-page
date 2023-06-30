const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const loginContent = document.getElementById("login-content");
const signupContent = document.getElementById("signup-content");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginContent.style.display = "block";
  signupContent.style.display = "none";
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupContent.style.display = "block";
  loginContent.style.display = "none";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Login form validation and submission
  // ...
});

document.getElementById("signup-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Sign-up form validation and submission
  // ...
});
