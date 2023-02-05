const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginClick() {
    return loginInput.value;
}

loginButton.addEventListener("click",  handleLoginClick);
