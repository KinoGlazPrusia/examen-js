import * as api from "../../utils/api.js"

export default function setupLoginForm() {
    const loginForm = document.forms['login-form']
    loginForm.onsubmit = (e) => handleSubmit(e, loginForm)
}

function handleSubmit(e, form) {
    e.preventDefault()
    const credentials = {
        'userId': form['userId'].value,
        'password': form['password'].value,
        'rememberMe': form['remember-me'].checked
    }

    api.login(credentials)
        .then(response => handleResponse(response))
}

function handleResponse(response) {
    const responseSpan = document.querySelector('.response')
    responseSpan.textContent = ''

    if (response.status != 200) {
        responseSpan.textContent = response.message
    } else {
        location.replace('client/pages/home/home.html')
    }
}