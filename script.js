const loginForm = document.querySelector("form.login"),
loginBtn = document.querySelector("label.login"),
signupBtn = document.querySelector("label.signup"),
loginText = document.querySelector(".title-text .login"),
wrapper = document.querySelector(".wrapper");

function setForm(a, height) {
    loginForm.style.marginLeft = a;
    loginText.style.marginLeft = a;
    wrapper.style.height = height;
}

signupBtn.onclick = () => setForm('-50%', '500px')
loginBtn.onclick = () => setForm('0%', '450px');