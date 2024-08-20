const loader = document.querySelector('.loader');
const formContainer = document.querySelector('.form-container');
const form = formContainer.querySelector('.form');
const username = formContainer.querySelector('#username');
const password = formContainer.querySelector('#password');
const showHidePasswordBtns = document.querySelectorAll('.showHidePassword');
const response = document.querySelector('.response');

/* Show/hide password */
showHidePasswordBtns[1].addEventListener('click', () => {
    showHidePasswordBtns[1].style.display = "none";
    password.setAttribute('type', 'text');
});
showHidePasswordBtns[0].addEventListener('click', () => {
    showHidePasswordBtns[1].style.display = "initial";
    password.setAttribute('type', 'password');
});

/* Submit the form data */
form.addEventListener('submit', signIn);

async function signIn(evt) {
    evt.preventDefault();
    loader.style.display = "flex";

    //const url = 'http://localhost:3001/login';
    const url = 'https://backendapplication.registerlogin.ca/login';
    const dataToBeSent = {
        username: username.value,
        password: password.value
    }

    const options = {
        method: 'POST',
        url: url,
        data: dataToBeSent,
        withCredentials: true
    };

    await axios.request(options)
        .then(res => {
            loader.style.display = "none";
            console.log(res);
            //test();
            //window.location.href = 'webpages/userHomepage.html';
        })
        .catch(err => {
            loader.style.display = "none";
            response.textContent = err.response.data;
            response.classList.remove('response-success');
            response.classList.add('response-failure');
        })
}

async function test() {
    const url = 'https://backendapplication.registerlogin.ca/isLoggedIn';
    const options = {
        method: 'POST',
        url: url,
        withCredentials: true
    };

    await axios.request(options)
        .then(res => {
            loader.style.display = "none";
            console.log(res);
            
        })
        .catch(err => {
            console.log(err);
        })
}

/* Forgot Password */
const forgotPassword = document.querySelector('.forgot-password');

forgotPassword.addEventListener('click', ()=>{
    window.location.href = 'webpages/forgotPassword.html';
});