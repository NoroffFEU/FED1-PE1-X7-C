import { API_REGISTER_URL } from "../js/constant.mjs";
import { doFetch } from "../utils/doFetch.mjs";

const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    registerUser(name, email, password);
});

async function registerUser(name, email, password) {
    console.log('Register User');
    const response = await doFetch(API_REGISTER_URL, {
        method: "POST",
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    });

    if (response.errors) {
        console.error('Registration failed:', response.errors);
    } else {
        console.log('Registration successful:', response);
    }
}
