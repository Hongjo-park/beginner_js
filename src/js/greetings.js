const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const inputValue = loginInput.value;
    localStorage.setItem(USERNAME_KEY, inputValue);

    paintGreetings();
}

function paintGreetings() {
    greeting.innerText = `Hello ${localStorage.getItem(USERNAME_KEY)}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function checkSavedName() {
    if (localStorage.getItem(USERNAME_KEY) === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    } else {
        paintGreetings();
    }
}

checkSavedName()
loginForm.addEventListener("submit", onLoginSubmit);
