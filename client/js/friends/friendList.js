import * as api from '../../js/utils/api.js'

export default async function setupFriendList() {
    setupSearchBar()

    api.getFriends()
        .then(response => {
            handleResponse(response)
        })
}

function setupSearchBar() {
    const searchInput = document.querySelector('.searchbar input')
    searchInput.oninput = (e) => handleInput(e)
}

function handleInput(e) {
    const filter = document.querySelector('.filter-select').value
    const filterValue = document.querySelector('.searchbar-input').value

    api.getFriends({filter: filter, value: filterValue})
        .then(response => {
            handleResponse(response)
        })
}

function handleResponse(data) {
    const friendListHTML = document.querySelector('.friend-list')
    friendListHTML.innerHTML = ''
    const friends = data.message

    friends.forEach(friend => {
        const friendCardHTML = `
            <div class="user-card friend">
                <img src=${friend.image} alt="Foto de perfil del usuario" class="user-image">
                <span class="user-name">${friend.name}</span>
                <span class="user-username">${friend.lastname}</span>
                <span class="user-email">${friend.email}</span>
            </div>
        `
        friendListHTML.innerHTML += friendCardHTML
    })
}