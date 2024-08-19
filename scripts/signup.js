const showHidePasswordBtns = document.querySelectorAll('.showHidePassword');
const inputs = document.querySelectorAll('.form-input');
const [username, email, password, confirmPassword] = [...inputs];

/* Show/hide password */
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

/* No spaces allowed in username or password input fields */
const specificationMessages = document.querySelectorAll('.check-for-specifications');

username.addEventListener('input', ()=>{
    if (username.value.includes(' ')){
        username.value = username.value.substring(0, username.value.length - 1);

        specificationMessages[0].style.opacity = "1";
        specificationMessages[0].style.zIndex = "1";
    }
    else{
        specificationMessages[0].style.opacity = "0";
        specificationMessages[0].style.zIndex = "-1";
    }
});

password.addEventListener('input', ()=>{
    if (password.value.includes(' ')){
        password.value = password.value.substring(0, password.value.length - 1);

        specificationMessages[1].style.opacity = "1";
        specificationMessages[1].style.zIndex = "1";
    }
    else{
        specificationMessages[1].style.opacity = "0";
        specificationMessages[1].style.zIndex = "-1";
    }
});

username.addEventListener('focusout', ()=>{
    specificationMessages[0].style.opacity = "0";
    specificationMessages[0].style.zIndex = "-1";
});

password.addEventListener('focusout', ()=>{
    specificationMessages[1].style.opacity = "0";
    specificationMessages[1].style.zIndex = "-1";
});

/* Check if the passwords match */
confirmPassword.addEventListener('input', checkForMatch);
confirmPassword.addEventListener('focusout', hideMatchMessage);
const matchMessage = document.querySelector('.check-for-match');

function checkForMatch() {
    if (this.value !== password.value.substring(0, this.value.length)) {
        matchMessage.style.opacity = "1";
        matchMessage.style.zIndex = "1";
    }
    else {
        matchMessage.style.opacity = "0";
        matchMessage.style.zIndex = "-1";
    }
}

function hideMatchMessage() {
    matchMessage.style.opacity = "0";
    matchMessage.style.zIndex = "-1";
}