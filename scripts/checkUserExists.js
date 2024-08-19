const loader = document.querySelector('.loader');
const form = document.querySelector('.form');
const response = document.querySelector('.response');

/* Check if the user already exists */
form.addEventListener('submit', checkUserExists);

async function checkUserExists(evt) {
    evt.preventDefault();
    loader.style.display = "flex";

    const url = 'http://localhost:3001/checkUserExists';
    const dataToBeSent = {
        email: email.value,
        username: username.value
    }

    const options = {
        method: 'POST',
        url: url,
        data: dataToBeSent
    };

    await axios.request(options)
    .then(res=>{
        /* If the user does not already exist, go to the next step: */
        sendConfirmationCode();
    })
    .catch(err=>{
        loader.style.display = "none";
        response.textContent = err.response.data;
        response.classList.remove('response-success');
        response.classList.add('response-failure');
    });
}