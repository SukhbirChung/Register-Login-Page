const inputs = document.querySelectorAll('input');
const [username, email, password, confirmPassword] = [...inputs];

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
const form = document.querySelector('form');
const signInBtn = document.querySelector('.signin-button');
const signUpBtn = document.querySelector('.signup-button');
const emailContainer = form.querySelector('.email-container');
const confirmPasswordContainer = form.querySelector('.confirm-password-container');
const submitBtn = form.querySelector('.submit-button');

signInBtn.addEventListener('click', () => {
    emailContainer.style.display = "none";
    confirmPasswordContainer.style.display = "none";
    submitBtn.textContent = "SIGN IN";
    signInBtn.style.borderBottom = "1px solid black";
    signUpBtn.style.borderBottom = "none";
});

signUpBtn.addEventListener('click', () => {
    emailContainer.style.display = "block";
    confirmPasswordContainer.style.display = "block";
    submitBtn.textContent = "CREATE ACCOUNT";
    signInBtn.style.borderBottom = "none";
    signUpBtn.style.borderBottom = "1px solid black";
});

/* Submit the form */

form.addEventListener('submit', sendFormData);

async function sendFormData(evt) {
    evt.preventDefault();

    if (password.value !== confirmPassword.value) {
        hideMatchMessage("1");
        return;
    }

    let url = '';

    const dataToBeSent = {
        username: username.value,
        password: password.value
    }

    if (email) {
        dataToBeSent.email = email.value;
        url = 'https://backendapplication.registerlogin.ca/signup';
    }
    else {
        url = 'https://backendapplication.registerlogin.ca/login';
    }

    const options = {
        method: 'POST',
        url: url,
        data: dataToBeSent
    };

    await axios.request(options)
        .then(response => {
            console.log(response);
            //loader.classList.add('d-none');
            //failureMessage.classList.add("d-none");

            //username.value = "";
            //password.value = "";
            //if (email) {
            //    email.value = "";
            //}

            //document.querySelector('.pageNavigationLink').click();
        })
        .catch(err => {
            // loader.classList.add('d-none');            
            // failureMessage.classList.remove("d-none");
            // failureMessage.textContent = err.response.data;
        })
}