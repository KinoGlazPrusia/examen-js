import * as api from '../../js/utils/api.js'
import setupGroupList from '../../js/groups/groupList.js'
import setupCreateGroupModal from '../../js/groups/createGroupModal.js'

document.addEventListener("DOMContentLoaded", async () => {
    /* CHEQUEJEM SI L'USUARI ESTÀ LOGUEJAT, SINO, EL TORNEM A LA PÀGINA DE LOGIN */
    const userIsLoggedIn = await api.isLoggedIn()
    if (!userIsLoggedIn) {
        location.replace('/examen-js/')
    }

    setupLogout()
    setupGoBack()
    setupGoBack()
    setupUserCard()
    setupGroupList()
    setupCreateGroupModal()
})

function setupUserCard() {
    const userName = document.querySelector('.user-name')
    const userUsername = document.querySelector('.user-username')

    api.getUserInfo().then(response => {
        userName.textContent = `${response.message.name} ${response.message.lastname}`
        userUsername.textContent = '@' + response.message.username
    })
}

function setupGoBack() {
    const goBackBtn = document.querySelector('.go-back')
    goBackBtn.onclick = () => location.replace('/examen-js/client/pages/friends/friends.html')
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