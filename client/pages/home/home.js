import * as api from '../../js/utils/api.js'
import setupPostGallery from '../../js/posts/postGallery.js'

document.addEventListener("DOMContentLoaded", async () => {
    /* CHEQUEJEM SI L'USUARI ESTÀ LOGUEJAT, SINO, EL TORNEM A LA PÀGINA DE LOGIN */
    const userIsLoggedIn = await api.isLoggedIn()
    if (!userIsLoggedIn) {
        location.replace('/examen-js/')
    }

    /* CONTROLS DE NAVEGACIÓ A - FRIENDS */
    const toFriendsPageBtn = document.querySelector('.my-friends')
    toFriendsPageBtn.onclick = () => location.replace('/examen-js/client/pages/friends/friends.html')

    /* CONFIGURACIÓ DE COMPONENTS */
    setupLogout()
    setupUserCard()
    setupPostGallery()
})

function setupUserCard() {
    const userName = document.querySelector('.user-name')
    const userUsername = document.querySelector('.user-username')

    api.getUserInfo().then(response => {
        userName.textContent = `${response.message.name} ${response.message.lastname}`
        userUsername.textContent = '@' + response.message.username
    })
}

function setupLogout() {
    const logoutBtn = document.querySelector('.logout')
    logoutBtn.onclick = () => {
        api.logout().then(response => {
            if (response.status === 200) {
                location.replace('/examen-js/')
            }
        })
    }
}