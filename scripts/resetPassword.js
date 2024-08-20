const loader = document.querySelector('.loader');
const resetPasswordForm = document.querySelector('.reset-password-form');
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

/* Get the token value from the page url */
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

/* Submit the form */
resetPasswordForm.addEventListener('submit', resetPassword);

async function resetPassword(evt) {
    evt.preventDefault();
    loader.style.display = 'flex';

    const url = 'http://localhost:3001/resetPassword';
    const dataToBeSent = {
        token: token,
        newPassword: newPassword.value
    }
console.log(dataToBeSent);
    const options = {
        method: 'POST',
        url: url,
        data: dataToBeSent
    }

    await axios.request(options)
    .then((res)=>{
        loader.style.display = 'none';
        response.textContent = `${res.data} Redirecting to login page soon...`;
        response.classList.add('response-success');
        response.classList.remove('response-failure');

        setTimeout(()=>{
            window.location.href = '../index.html';
        },3000)
    })
    .catch((err)=>{
        loader.style.display = 'none';        
        response.textContent = err.response.data;
        response.classList.remove('response-success');
        response.classList.add('response-failure');
    });
}