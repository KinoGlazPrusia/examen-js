import * as api from '../../js/utils/api.js'

export default async function setupSuggestedFriends() {
    api.getSuggestedFriends()
        .then(response => handleResponse(response))
}

function handleResponse(data) {
    console.log(data)
    const suggestedFriendListHTML = document.querySelector('.suggested')
    suggestedFriendListHTML.innerHTML = ''
    const sharedFriends = data.message.sharedFriends
    const suggestedFriends = data.message.suggestedFriends

    suggestedFriends.forEach(friend => {
        const friendCardHTML = `
            <div class="user-card friend">
                <img src=${friend.image} alt="Foto de perfil del usuario" class="user-image">
                <span class="user-name">${friend.name}</span>
                <span class="user-username">${friend.lastname}</span>
                <span class="user-email">${friend.email}</span>
            </div>
        `
        suggestedFriendListHTML.innerHTML += friendCardHTML
    })
}