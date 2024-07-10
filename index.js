function focusInput(inputId) {
    document.getElementById(inputId).focus();
}

const password = document.querySelector('input#password.input-field');
const btn = document.getElementById('login-button');
password.addEventListener('input', onPasswordChange);
function onPasswordChange(e) {
    console.log(btn);
    if (e.target.value.length < 8) {
        password.classList.add('border-red');
        btn.disabled = true;
    } else {
        password.classList.remove('border-red');
        btn.disabled = false;
    }
}

const confirmPasswordValue = document.querySelector('input#c-password.input-field');
confirmPasswordValue.addEventListener('change', confirmPassword);
function confirmPassword() {
    console.log(confirmPasswordValue.value);
    if (password.value !== confirmPasswordValue.value) {
        btn.disabled = true;
        confirmPasswordValue.classList.add('border-red');
        alert('Passwords do not match');
    } else {
        confirmPasswordValue.classList.remove('border-red');
        btn.disabled = false;
    }
}

const form = document.querySelector('.login-container');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector("#name");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    console.log(name, username, email, password);

    const registrationData = {
        name: name.value,
        username: username.value,
        email: email.value,
        password: password.value
    };
    console.log(registrationData);
});
