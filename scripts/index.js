const inputs = document.querySelectorAll('input');
const [email, password, confirmPassword] = [...inputs];

/* Show/hide password in login and signup forms*/
const showHidePasswordBtns = document.querySelectorAll('.showHidePassword');

showHidePasswordBtns[1].addEventListener('click', () => {
    showHidePasswordBtns[1].style.display = "none";
    password.setAttribute('type', 'text');
});
showHidePasswordBtns[0].addEventListener('click', () => {
    showHidePasswordBtns[1].style.display = "initial";
    password.setAttribute('type', 'password');
});

showHidePasswordBtns[3].addEventListener('click', () => {
    showHidePasswordBtns[3].style.display = "none";
    confirmPassword.setAttribute('type', 'text');
});
showHidePasswordBtns[2].addEventListener('click', () => {
    showHidePasswordBtns[3].style.display = "initial";
    confirmPassword.setAttribute('type', 'password');
});

/* No spaces allowed in password input field */
password.addEventListener('input', checkForSpecifications);
password.addEventListener('focusout', hideSpecificationMessage);
const specificationMessage = document.querySelector('.check-for-specifications');

function checkForSpecifications() {
    if (this.value.includes(' ')) {
        this.value = this.value.substring(0, this.value.length - 1);
        hideSpecificationMessage("1");
    } else {
        hideSpecificationMessage("0");
    }
}

function hideSpecificationMessage(value) {
    specificationMessage.style.opacity = value;
    specificationMessage.style.zIndex = value;
}

/* Check if the passwords match */
confirmPassword.addEventListener('input', checkForMatch);
confirmPassword.addEventListener('focusout', hideMatchMessage);
const matchMessage = document.querySelector('.check-for-match');

function checkForMatch() {
    if (this.value !== password.value.substring(0, this.value.length)) {
        hideMatchMessage("1");
    }
    else {
        hideMatchMessage("0");
    }
}

function hideMatchMessage(value) {
    matchMessage.style.opacity = value;
    matchMessage.style.zIndex = value;
}

/* Switch between Signin and Signup forms */
const signInBtn = document.querySelector('.signin-button');
const signUpBtn = document.querySelector('.signup-button');
const confirmPasswordContainer = document.querySelector('.confirm-password-container');
const submitBtn = document.querySelector('.submit-button');

signInBtn.addEventListener('click', ()=>{
    confirmPasswordContainer.style.display = "none";
    submitBtn.textContent = "SIGN IN";
    signInBtn.style.borderBottom = "1px solid black";
    signUpBtn.style.borderBottom = "none";
});

signUpBtn.addEventListener('click', ()=>{
    confirmPasswordContainer.style.display = "block";
    submitBtn.textContent = "CREATE ACCOUNT";
    signInBtn.style.borderBottom = "none";
    signUpBtn.style.borderBottom = "1px solid black";
});