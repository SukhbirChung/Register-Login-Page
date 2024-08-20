/* Only show this page if the user is logged in */
const loader = document.querySelector('.loader');

window.addEventListener('load', isLoggedIn);

async function isLoggedIn() {
    loader.style.display = "flex";

    //const url = 'http://localhost:3001/isLoggedIn';
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
            loader.style.display = "none";
            console.log(err);
            
        })
}

/* Sign out */
const signOutBtn = document.querySelector('.signout-btn');
const response = document.querySelector('.response');

signOutBtn.addEventListener('click', logOut);

async function logOut(evt) {
    loader.style.display = "flex";
evt.preventDefault();
    //const url = 'http://localhost:3001/logout';
    const url = 'https://backendapplication.registerlogin.ca/logout';
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
            loader.style.display = "none";
            response.textContent = err.response.data;
            response.classList.remove('response-success');
            response.classList.add('response-failure');
        })
}