/* Sign out */
const loader = document.querySelector('.loader');
const signOutBtn = document.querySelector('.signout-btn');
const response = document.querySelector('.response');

signOutBtn.addEventListener('click', logOut);

async function logOut() {
    loader.style.display = "flex";

    const url = 'http://localhost:3001/logout';

    const options = {
        method: 'POST',
        url: url,
        credentials: 'include'
    };

    await axios.request(options)
        .then(res => {
            loader.style.display = "none";
            window.location.href = '../index.html';
        })
        .catch(err => {
            loader.style.display = "none";
            response.textContent = err.response.data;
            response.classList.remove('response-success');
            response.classList.add('response-failure');
        })
}