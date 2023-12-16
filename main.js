const phoneNumber = document.getElementById("pnumber");
const password = document.getElementById("pwd");
const confirmPassword = document.getElementById("cpwd");
const confirmButton = document.getElementById("button");

let check = function () {
  let elements = document.getElementsByClassName("error");
  if (password.value === confirmPassword.value) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = "green";
      confirmButton.disabled = false;
    }
  } else if (
    password.value.length === 0 ||
    confirmPassword.value.length === 0
  ) {
    confirmButton.disabled = true;
  } else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.borderColor = "red";
      confirmButton.disabled = true;
    }
  }
};
