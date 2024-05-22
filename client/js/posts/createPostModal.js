import * as api from '../utils/api.js'

export default async function setupCreatePostModal() {
    const form = document.forms['create-post']
    form.onsubmit = (e) => handleSubmit(e, form)
}

function handleSubmit(e, form) {
    e.preventDefault()
    api.createPost(form).then(response => handleResponse(response))
}

function handleResponse(response) {
    console.log(response)
}