import * as api from './utils/api.js'
import loginForm from './forms/loginForm/loginForm.js'
import registerForm from './forms/registerForm/registerForm.js'

document.addEventListener("DOMContentLoaded", async () => {
    const userIsLoggedIn = await api.isLoggedIn()
    if (userIsLoggedIn) {
        location.replace('client/pages/home/home.html')
    }
    
    loginForm()
    registerForm()
})