var userName = "";
var email = "";
var password = "";
var userNameInput = document.getElementById("username-input");
var emailInput = document.getElementById("email-input");
var passwordInput = document.getElementById("password-input");
var confirmPassword = document.getElementById("confirm-password");
var userNameLogin = document.getElementById("username-login");
var emailLogin = document.getElementById("email-login");
var passwordLogin = document.getElementById("password-login");

function signUp(form) {
  if (
    userNameInput.value != "" &&
    emailInput.value != "" &&
    passwordInput != ""
  ) {
    if (userNameInput.value.length >= 4) {
      if (passwordInput.value.length >= 8) {
        if (passwordInput.value === confirmPassword.value) {
          userName = userNameInput.value;
          sessionStorage.setItem("userName", userName);
          email = emailInput.value;
          sessionStorage.setItem("email", email);
          password = passwordInput.value;
          sessionStorage.setItem("password", password);
          form.action = "login.html";
        } else {
          alert("Please make sure match passwords!");
        }
      } else {
        alert("Password has to be at least 8 characters long");
      }
    } else {
      alert("Username has to be at least 4 characters long!");
    }
  } else {
    alert("Please fill out all fields!");
  }
}

function logIn() {
  if (
    userNameLogin.value === sessionStorage.getItem("userName") &&
    emailLogin.value === sessionStorage.getItem("email") &&
    passwordLogin.value === sessionStorage.getItem("password")
  ) {
    alert("Login successful");
  } else {
    alert("Login information false!");
  }
}
