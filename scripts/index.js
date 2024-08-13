
const loader = document.querySelector('.loader');
const formContainer = document.querySelector('.form-container');
const form = formContainer.querySelector('.form');
const username = formContainer.querySelector('#username');
const password = formContainer.querySelector('#password');
const showHidePasswordBtns = document.querySelectorAll('.showHidePassword');
const response = formContainer.querySelector('.response');

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
form.addEventListener('submit', sendFormData);

async function sendFormData(evt) {
    evt.preventDefault();
    loader.style.display = "flex";

    const url = 'https://backendapplication.registerlogin.ca/login';
    const dataToBeSent = {
        username: username.value,
        password: password.value
    }

    const options = {
        method: 'POST',
        url: url,
        data: dataToBeSent
    };

    await axios.request(options)
        .then(res => {
            loader.style.display = "none";
            response.textContent = res.data;

            if (res.data === 'Logged in successfully.'){
                response.classList.add('response-success');
                response.classList.remove('response-failure');

                username.value = "";
                password.value = "";
            }
            else{
                response.classList.remove('response-success');
                response.classList.add('response-failure');
            }
        })
        .catch(err => {
            loader.style.display = "none";
            response.textContent = err.response.data;
            response.classList.remove('response-success');
            response.classList.add('response-failure');
        })
}