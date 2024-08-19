const resetPasswordForm = document.querySelector('.reset-password-form');
const token = resetPasswordForm.querySelector('.token').value;
const showHidePasswordBtns = resetPasswordForm.querySelectorAll('.showHidePassword');
const newPassword = resetPasswordForm.querySelector('#newPassword');
const specificationMessage = resetPasswordForm.querySelector('.check-for-specifications');
const response = document.querySelector('.response');

/* Show/hide password */
showHidePasswordBtns[1].addEventListener('click', () => {
    showHidePasswordBtns[1].style.display = "none";
    newPassword.setAttribute('type', 'text');
});
showHidePasswordBtns[0].addEventListener('click', () => {
    showHidePasswordBtns[1].style.display = "initial";
    newPassword.setAttribute('type', 'password');
});

/* No spaces allowed in password input field */
newPassword.addEventListener('input', ()=>{
    if (newPassword.value.includes(' ')){
        newPassword.value = newPassword.value.substring(0, newPassword.value.length - 1);

        specificationMessage.style.opacity = "1";
        specificationMessage.style.zIndex = "1";
    }
    else{
        specificationMessage.style.opacity = "0";
        specificationMessage.style.zIndex = "-1";
    }
});

newPassword.addEventListener('focusout', ()=>{
    specificationMessage.style.opacity = "0";
    specificationMessage.style.zIndex = "-1";
});

/* Submit the form */
resetPasswordForm.addEventListener('submit', resetPassword);

async function resetPassword(evt) {
    evt.preventDefault();    
}