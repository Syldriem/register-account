function focusInput(inputId) {
    document.getElementById(inputId).focus();
}

const password = document.querySelector('input#password.input-field');
password.addEventListener('input', onPasswordChange);
function onPasswordChange(e) {
    console.log(e);
    if (e.target.value.length < 8) {
        password.classList.add('border-red');
    } else {
        password.classList.remove('border-red');
    }
}

function confirmPassword() {
    const confirmPassword = document.querySelector('input#confirm-password.input-field').value;
    if (password.value !== confirmPassword) {
        alert('Passwords do not match');
    }
}
