import * as api from "../../utils/api.js"

export default function setupRegisterForm() {
    const modal = document.querySelector('.register-modal')
    const registerLink = document.querySelector('.register code')
    const form = document.forms['register-form']

    registerLink.onclick = () => setupModal(modal)
    form.onsubmit = (e) => handleSubmit(e, form)
}

function setupModal(modal) {
    modal.style.display = 'grid'

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'
        }
    }
}

function handleSubmit(e, form) {
    e.preventDefault()
    api.register(form).then(response => handleResponse(response))
}

function handleResponse(response) {
    const responseSpan = document.querySelector('.response#register')
    responseSpan.textContent = ''

    if (response.status !== 200) {
        responseSpan.textContent = response.message
    } else {
        // location.replace('client/pages/home/home.html')
    }
}