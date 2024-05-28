import { API_LOGIN_URL } from "../js/constant.mjs";
import { doFetch } from "../utils/doFetch.mjs";

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    loginUser(name, email, password);
});

async function loginUser(name, email, password) {
    console.log('Login User');
    const response = await doFetch(API_LOGIN_URL, {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    });

    if (response.errors) {
        console.error('Login failed:', response.errors);
    } else {
        console.log('Login successful:', response);
    }
}
